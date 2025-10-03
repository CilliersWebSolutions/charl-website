import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default class ProgressBar {
    constructor() {
        this.init();
    }

    init() {
        this.progressBar = document.querySelector('.progress-bar');
        this.milestones = Array.from(document.querySelectorAll('.progress-milestone'));
        this.sections = Array.from(document.querySelectorAll('.service-section'));
        this.menuItems = Array.from(document.querySelectorAll('.service-menu [data-target]'));

        if (!this.progressBar || this.milestones.length === 0 || this.sections.length === 0) return;

        this.setupScrollTrigger();
        this.setupMenuNavigation();
        this.setInitialMilestoneStates();
    }

    setupScrollTrigger() {
        const firstSection = this.sections[0];
        const lastSection = this.sections[this.sections.length - 1];

        ScrollTrigger.create({
            trigger: firstSection,
            endTrigger: lastSection,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            onUpdate: self => {
                const progress = self.progress;
                this.progressBar.style.height = `${progress * 100}%`;
                this.updateMilestoneStates(progress);
            }
        });

        // Milestone highlighting as section is centered
        this.sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'center center',
                end: 'center center',
                onEnter: () => this.activateMilestone(i),
                onEnterBack: () => this.activateMilestone(i)
            });
        });
    }

    setInitialMilestoneStates() {
        // Set the first main and first sub milestone as active at start
        let firstMain = this.milestones.find(m => m.dataset.type === 'main');
        let firstSub = this.milestones.find(m => m.dataset.type === 'sub');
        if (firstMain) firstMain.classList.add('active');
        if (firstSub) firstSub.classList.add('active');
    }

    updateMilestoneStates(progress) {
        // For each milestone, determine if it is completed, active, or waiting
        this.milestones.forEach((milestone, i) => {
            // You can map progress to milestone index, or use section positions for more accuracy
            let section = this.sections[i];
            if (!section) return;
            let sectionRect = section.getBoundingClientRect();
            let sectionCenter = sectionRect.top + sectionRect.height / 2;
            let viewportCenter = window.innerHeight / 2;

            if (sectionCenter < viewportCenter - 20) {
                milestone.classList.add('completed');
                milestone.classList.remove('active', 'waiting');
            } else if (Math.abs(sectionCenter - viewportCenter) < 40) {
                milestone.classList.add('active');
                milestone.classList.remove('completed', 'waiting');
            } else {
                milestone.classList.add('waiting');
                milestone.classList.remove('active', 'completed');
            }
        });
    }

    activateMilestone(index) {
        this.milestones.forEach((milestone, i) => {
            milestone.classList.toggle('active', i === index);
        });
        this.menuItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    setupMenuNavigation() {
        this.menuItems.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                const targetId = item.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    gsap.to(window, {
                        scrollTo: { y: targetSection, offsetY: window.innerHeight / 2 - targetSection.offsetHeight / 2 },
                        duration: 1,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }
}