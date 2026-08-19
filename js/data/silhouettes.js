// Stylized side-view fish silhouettes by body type. Inner SVG for viewBox "0 0 200 80".
// Colored via currentColor (classes sil-body / sil-fin / sil-eye styled in app.css).

export const SILHOUETTES = {
  predator: `
    <path class="sil-fin" d="M84 28 C96 13, 116 13, 128 27 L84 28 Z"/>
    <path class="sil-fin" d="M140 29 C148 20, 158 20, 164 29 Z"/>
    <path class="sil-fin" d="M90 55 L100 70 L112 56 Z"/>
    <path class="sil-fin" d="M182 41 L199 26 L192 41 L199 56 Z"/>
    <path class="sil-body" d="M8 42 C24 30, 64 24, 108 26 C146 28, 172 32, 185 41 C172 50, 146 56, 108 56 C64 58, 24 52, 8 42 Z"/>
    <circle class="sil-eye" cx="27" cy="38" r="3.2"/>`,
  bass: `
    <path class="sil-fin" d="M66 22 L74 8 L82 20 L90 9 L98 19 L106 10 L114 21 Z"/>
    <path class="sil-fin" d="M124 22 C134 12, 148 13, 154 24 Z"/>
    <path class="sil-fin" d="M82 62 L94 76 L106 63 Z"/>
    <path class="sil-fin" d="M176 44 L198 31 L191 44 L198 58 Z"/>
    <path class="sil-body" d="M10 44 C26 26, 60 18, 100 20 C140 22, 168 30, 179 44 C168 57, 140 64, 100 64 C60 66, 26 60, 10 44 Z"/>
    <circle class="sil-eye" cx="30" cy="37" r="3.4"/>`,
  panfish: `
    <path class="sil-fin" d="M58 16 L66 4 L74 14 L82 5 L90 14 L98 6 L106 16 Z"/>
    <path class="sil-fin" d="M70 68 L82 78 L94 68 Z"/>
    <path class="sil-fin" d="M156 42 L180 29 L174 42 L180 55 Z"/>
    <path class="sil-body" d="M14 42 C26 20, 60 12, 92 14 C128 16, 152 28, 159 42 C152 57, 128 68, 92 68 C60 70, 26 64, 14 42 Z"/>
    <circle class="sil-eye" cx="34" cy="34" r="3.4"/>`,
  trout: `
    <path class="sil-fin" d="M84 27 C92 16, 108 16, 116 26 Z"/>
    <path class="sil-fin" d="M148 30 C153 24, 161 24, 165 30 Z"/>
    <path class="sil-fin" d="M92 55 L102 68 L112 56 Z"/>
    <path class="sil-fin" d="M184 40 L199 28 L196 40 L199 53 Z"/>
    <path class="sil-body" d="M8 40 C28 28, 70 24, 112 26 C150 28, 176 32, 187 40 C176 49, 150 54, 112 56 C70 58, 28 54, 8 40 Z"/>
    <circle class="sil-eye" cx="25" cy="37" r="3"/>`,
  catfish: `
    <path class="sil-fin" d="M10 33 C3 27, 1 23, 3 18"/>
    <path class="sil-fin" d="M10 47 C3 53, 1 57, 3 62"/>
    <path class="sil-fin" d="M54 22 L63 7 L72 22 Z"/>
    <path class="sil-fin" d="M60 58 L70 72 L82 59 Z"/>
    <path class="sil-fin" d="M184 40 L198 29 L194 41 L198 52 Z"/>
    <path class="sil-body" d="M6 40 C14 26, 34 20, 60 22 C110 24, 150 30, 187 40 C150 52, 110 58, 60 58 C34 60, 14 54, 6 40 Z"/>
    <circle class="sil-eye" cx="23" cy="35" r="2.6"/>`,
};

export function silhouette(bodyType) {
  return SILHOUETTES[bodyType] || SILHOUETTES.predator;
}
