uniform int stoneCount;
uniform float stonePositions[64]; // 32 stones max
uniform float stoneSizes[32];
uniform vec3 stoneColor;
uniform float time;
uniform sampler2D stoneTexture;

varying vec2 vUv;

void main() {
    float alpha = 0.0;
    vec3 color = vec3(0.0);

    for (int i = 0; i < 32; i++) {
        if (i >= stoneCount) break;
        vec2 pos = vec2(stonePositions[i * 2], stonePositions[i * 2 + 1]);
        float size = stoneSizes[i];

        // Animate stone falling: move from top (y=0) to pos.y over time
        float fallY = mix(0.0, pos.y, min(time * 0.5 + float(i) * 0.05, 1.0)); // Stagger stones by index
        float dist = distance(vUv, vec2(pos.x, fallY));
        if (dist < size) {
            alpha = 1.0;
            color = texture2D(stoneTexture, vUv).rgb;
        }
    }

    if (alpha > 0.0) {
        gl_FragColor = vec4(color, alpha);
    } else {
        discard;
    }
}