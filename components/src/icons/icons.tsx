import React from "react";
import { IconComponent } from "./icons.type";

// ARROWS
export const Arrows: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 512 512"><path fill={color} d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z" /></svg>
);

export const LongArrow: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 448 512" ><path fill={color}  d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
);

// BRANDS
export const Linkedin: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 448 512"><path fill={color} d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);

export const Github: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 496 512"><path fill={color} d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);

// RANDOMS
export const Book: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 448 512"><path fill={color} d="M356 160H188c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm12 52v-8c0-6.6-5.4-12-12-12H188c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12zm64.7 268h3.3c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h344c13.3 0 24 10.7 24 24v368c0 10-6.2 18.6-14.9 22.2-3.6 16.1-4.4 45.6-.4 65.8zM128 384h288V32H128v352zm-96 16c13.4-10 30-16 48-16h16V32H80c-26.5 0-48 21.5-48 48v320zm372.3 80c-3.1-20.4-2.9-45.2 0-64H80c-64 0-64 64 0 64h324.3z"></path></svg>
);

export const Cars: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 640 512"><path fill={color} d="M241.85 256H46.22A14.24 14.24 0 0 1 32 241.78v-55.11A42.72 42.72 0 0 1 74.67 144h266.66c.29 0 .53.16.81.16.65 0 1.27-.16 1.93-.16h58.14a75.19 75.19 0 0 0-30.81-25.56l-15.88-68.83A63.71 63.71 0 0 0 293.16 0H120.07a63.7 63.7 0 0 0-62.36 49.61l-16.28 70.55C17 132.44 0 157.49 0 186.67v55.11a46.14 46.14 0 0 0 32 43.75V320a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-32h143.65c4.31-4.29 8.57-8.65 13.64-12.21zM88.89 56.81A32 32 0 0 1 120.07 32h173.09a32 32 0 0 1 31.18 24.81L337.07 112H76.15zM64 196a20 20 0 1 0 20-20 20 20 0 0 0-20 20zm244 156a20 20 0 1 0 20 20 20 20 0 0 0-20-20zm248 0a20 20 0 1 0 20 20 20 20 0 0 0-20-20zm39.4-57.56l-15.88-68.83A63.71 63.71 0 0 0 517.16 176H344.07a63.7 63.7 0 0 0-62.36 49.61l-16.28 70.55C241 308.44 224 333.49 224 362.67v55.11a46.14 46.14 0 0 0 32 43.75V496a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-32h256v32a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-34.47a46.14 46.14 0 0 0 32-43.75v-55.11a74.7 74.7 0 0 0-44.6-68.23zm-282.51-61.63A32 32 0 0 1 344.07 208h173.09a32 32 0 0 1 31.18 24.81L561.07 288H300.15zM608 417.78A14.24 14.24 0 0 1 593.78 432H270.22A14.24 14.24 0 0 1 256 417.78v-55.11A42.72 42.72 0 0 1 298.67 320h266.66A42.72 42.72 0 0 1 608 362.67z"></path></svg>
);

export const Eye: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 576 512"><path fill={color} d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/></svg>
);

export const Envelope: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 512 512"><path fill={color} d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg>
);

export const Handshake: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 640 512"><path fill={color} d="M238.4 176.6l83.1-76.2c3-2.7 6.8-4.2 10.8-4.2h101c4.3 0 8.3 1.7 11.4 4.8l60.7 59.1H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H518.5l-51.2-49.9c-9.1-9.1-21.1-14.1-33.9-14.1h-101c-10.4 0-20.1 3.9-28.3 10-8.4-6.5-18.7-10.3-29.3-10.3h-69.5c-12.7 0-24.9 5.1-34 14.1L121.4 128H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h126.6l59.3-59.3c3-3 7.1-4.7 11.3-4.7h69.5c.9 2.2.3.7 1.1 2.9l-59 54.1c-28.2 25.9-29.6 69.2-4.2 96.9 14.3 15.6 58.6 39.3 96.9 4.2l22.8-20.9 125.6 101.9c6.8 5.5 7.9 15.7 2.3 22.5l-9.5 11.7c-5.4 6.6-15.4 8.1-22.5 2.3l-17.8-14.4-41.5 51c-7.5 9.3-21 10.2-29.4 3.4l-30.6-26.1-10.4 12.8c-16.7 20.5-47 23.7-66.6 7.9L142 320.1H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h121.2l81.5 78c29.8 24.1 71.8 23.4 101-.2l7.2 6.2c9.6 7.8 21.3 11.9 33.5 11.9 16 0 31.1-7 41.4-19.6l21.9-26.9c16.4 8.9 42.9 9 60-12l9.5-11.7c6.2-7.6 9.6-16.6 10.5-25.7H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H486.8c-2.5-3.5-5.3-6.9-8.8-9.8l-121.9-99 28.4-26.1c6.5-6 7-16.1 1-22.6s-16.1-6.9-22.6-1l-75.1 68.8c-14.4 13.1-38.6 12-51.7-2.2-13.5-14.7-12.6-37.9 2.3-51.6z"></path></svg>
);

export const PeopleArrows: IconComponent = ({ color, size }) => (
	<svg height={size}  viewBox="0 0 576 512"><path fill={color} d="M480,128a64,64,0,1,0-64-64A64,64,0,0,0,480,128Zm0-96a32,32,0,1,1-32,32A32,32,0,0,1,480,32Zm32,128H448a63.55,63.55,0,0,0-50.15,24.51,62.7,62.7,0,0,1,32.67,13.41c5.1-3.44,10.88-5.92,17.48-5.92h64a32,32,0,0,1,32,32V352H512V480H448V393.8l-12,11.81a65.12,65.12,0,0,1-20,13.44V480a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V384a32,32,0,0,0,32-32V224A64,64,0,0,0,512,160ZM128,393.81V480H64V352H32V224a32,32,0,0,1,32-32h64c6.6,0,12.39,2.49,17.49,5.92a62.6,62.6,0,0,1,32.71-13.34A63.57,63.57,0,0,0,128,160H64A64,64,0,0,0,0,224V352a32,32,0,0,0,32,32v96a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V419.07a65.42,65.42,0,0,1-20-13.46ZM96,128A64,64,0,1,0,32,64,64,64,0,0,0,96,128Zm0-96A32,32,0,1,1,64,64,32,32,0,0,1,96,32ZM472.89,304a32,32,0,0,0-9.55-22.8l-56.89-56C385.64,204.71,352,220.52,352,248v40H224V248c0-27.41-33.82-43.11-54.45-22.8l-56.89,56a32,32,0,0,0,0,45.6l56.89,56c21.3,21,54.45,4,54.45-22.8V320H352v40c0,27,33.36,43.57,54.45,22.8l56.89-56A32,32,0,0,0,472.89,304ZM192,360l-56.89-56L192,248Zm192,0V248l56.89,56Z"></path></svg>
);

export const Train: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 448 512"><path fill={color} d="M224 320c8.823 0 16 7.177 16 16s-7.177 16-16 16-16-7.177-16-16 7.177-16 16-16m0-32c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM320 0H128C64 0 0 42.981 0 96v256c0 47.169 50.656 86.391 106.9 94.473l-55.285 55.285c-3.78 3.78-1.103 10.243 4.243 10.243h25.798c3.183 0 6.235-1.264 8.485-3.515L150.627 448h146.745l60.486 60.485a12.002 12.002 0 0 0 8.485 3.515h25.798c5.345 0 8.022-6.463 4.243-10.243L341.1 446.472C397.344 438.391 448 399.169 448 352V96c0-53.019-63-96-128-96zM32 128h384v96H32v-96zm96-96h192c58.237 0 96 37.881 96 64H32c0-32.299 47.552-64 96-64zm192 384H128c-48.448 0-96-31.701-96-64v-96h384v96c0 32.299-47.552 64-96 64z"></path></svg>
);

export const Youtube: IconComponent = ({ color, size }) => (
	<svg height={size} viewBox="0 0 576 512"><path fill={color} d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
);
