export default function Wheel(props) {
  return (
    <svg className="wheel" viewBox="350 350 1300 1300">
      <defs>
        <filter id="fil1" x="0" y="0" />
        <feGaussianBlur result="blur" stdDeviation="1" />
      </defs>
      <g id="color-slices">
        <g id="blue-color" data-color="blue">
          <polygon
            className="cls-13"
            points="999.62 1003.08 999.8 1001.96 999.29 1000.4 999.66 1000.25 1000.1 1000.31 1007.1 1001.51 1000.17 1003.06 999.81 1001.98 999.62 1003.08"
          />
          <polygon
            className="cls-13"
            points="999.65 1003.08 999.82 1001.92 999.22 1000.43 999.61 1000.25 1000.09 1000.3 1006.19 1001.28 1000.27 1003.04 999.83 1001.94 999.65 1003.08"
          />
          <polygon
            className="cls-9"
            points="1000.16 1003.12 1000.15 1001.99 999.37 1000.54 999.71 1000.33 1000.16 1000.31 1007.27 1000.31 1000.69 1003.02 1000.16 1002.01 1000.16 1003.12"
          />
          <polygon
            className="cls-9"
            points="1000.17 1003.12 1000.16 1001.95 999.31 1000.59 999.68 1000.33 1000.17 1000.31 1006.12 1000.31 1000.79 1002.97 1000.17 1001.96 1000.17 1003.12"
          />
          <g id="slice-32-color" className="slices" data-number="32">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1001.5,1000.36l-2.76-.48,52.81-625.49,1.4,.12c36.31,3.07,72.58,9.35,107.81,18.67l1.36,.36-.36,1.36-160.26,605.45Zm52.61-622.92l-51.22,606.68,155.79-588.57c-34.19-8.96-69.36-15.05-104.57-18.11Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1001.5,1000.36l-2.76-.48,43.28-512.66,1.4,.12c29.76,2.52,59.49,7.67,88.37,15.3l1.36,.36-.36,1.36-131.29,496Zm43.08-510.1l-41.69,493.86,126.82-479.12c-27.84-7.28-56.47-12.23-85.13-14.74Z"
            />
            <text
              className="cls-color"
              transform="translate(1077.44 449.08) rotate(11.6)"
            >
              <tspan x="0" y="0">
                32
              </tspan>
            </text>
          </g>
          <g id="slice-19-color" className="slices" data-number="19">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1001.02,1002.49l-2.43-1.39,263.04-570.07,1.28,.59c33.15,15.37,65.09,33.68,94.94,54.42l1.15,.8-.8,1.15-357.18,514.49Zm261.98-567.72l-255.13,552.93,347.22-500.14c-29-20.05-59.97-37.8-92.09-52.78Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1001.02,1002.48l-2.43-1.39,215.59-467.24,1.28,.59c27.18,12.61,53.36,27.62,77.81,44.6l1.15,.8-.8,1.15-292.61,421.48Zm214.54-464.9l-207.69,450.1,282.65-407.13c-23.6-16.3-48.81-30.75-74.96-42.97Z"
            />
            <text
              className="cls-6"
              transform="translate(1260.42 510.46) rotate(28.43)"
            >
              <tspan x="0" y="0">
                19
              </tspan>
            </text>
          </g>
          <g id="slice-21-color" className="slices" data-number="21">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M999.44,1000.35l-.29,.65,442.31-445.59,1,.99c25.86,25.8,49.59,53.96,70.52,83.68l.81,1.15-1.15,.81-513.19,358.31Zm442.02-440.96l-429.28,431.9,497.68-350.73c-20.37-28.79-43.37-56.08-68.4-81.16Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M999.8,1001.96l-.8-1.05,362.62-365.18,1,.99c21.21,21.17,40.66,44.24,57.8,68.58l.81,1.15-1.15,.81-420.28,294.7Zm361.83-362.25l-349.45,351.58,405.13-285.51c-16.58-23.41-35.3-45.62-55.68-66.07Z"
            />
            <text
              className="cls-6"
              transform="translate(1416.2 632.22) rotate(50.75)"
            >
              <tspan x="0" y="0">
                21
              </tspan>
            </text>
          </g>
          <g id="slice-25-color" className="slices" data-number="25">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1000.51,1001.36l-.97-2.63,568.18-267.06,.6,1.27c15.59,33.07,28.31,67.63,37.82,102.71l.37,1.36-1.36,.37-604.65,163.98Zm565.87-265.95l-551.11,259.03,587.79-159.41c-9.3-34.01-21.64-67.51-36.69-99.62Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1000.51,1001.35l-.97-2.63,465.7-218.89,.6,1.27c12.78,27.11,23.2,55.43,31,84.18l.37,1.36-496.69,134.71Zm463.38-217.78l-448.62,210.86,478.48-129.77c-7.58-27.68-17.62-54.95-29.86-81.09Z"
            />
            <text
              className="cls-color"
              transform="translate(1515.97 793.21) rotate(68.94)"
            >
              <tspan x="0" y="0">
                25
              </tspan>
            </text>
          </g>
          <g id="slice-27-color" className="slices" data-number="27">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1569.36,1264.87l-569.81-263.59,.95-2.63,606.79,160.62-.36,1.36c-9.34,35.41-21.78,70.05-36.98,102.97l-.59,1.28Zm-554.06-259.4l552.68,255.67c14.67-31.97,26.73-65.56,35.87-99.88l-588.55-155.79Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1466.58,1217.32l-467.03-216.05,.95-2.63,497.34,131.65-.36,1.36c-7.65,29.01-17.85,57.4-30.31,84.4l-.59,1.28Zm-451.27-211.85l449.9,208.12c11.93-26.04,21.75-53.38,29.2-81.3l-479.09-126.82Z"
            />
            <text
              className="cls-color"
              transform="translate(1528.06 1177.69) rotate(108.63)"
            >
              <tspan x="0" y="0">
                27
              </tspan>
            </text>
          </g>
          <g id="slice-36-color" className="slices" data-number="36">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1444.43,1443.58l-445.28-442.59,1.79-2.15,515.45,358.57-.8,1.15c-20.77,29.85-44.37,58.12-70.17,84.02l-.99,.99Zm-431.91-433.26l431.9,429.29c24.96-25.18,47.85-52.58,68.06-81.49l-499.96-347.8Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1364.12,1363.75l-1-.99-363.97-361.77,1.79-2.15,422.48,293.9-.8,1.15c-17.02,24.46-36.37,47.63-57.51,68.86l-.99,1Zm-351.6-353.43l351.58,349.46c20.31-20.51,38.94-42.82,55.4-66.34l-406.99-283.12Z"
            />
            <text
              className="cls-color"
              transform="translate(1436.85 1343.08) rotate(129.52)"
            >
              <tspan x="0" y="0">
                36
              </tspan>
            </text>
          </g>
          <g id="slice-30-color" className="slices" data-number="30">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1265.92,1568.8l-267.05-568.2,2.42-1.41,361.62,513.12-1.15,.81c-29.81,21.02-61.63,39.55-94.57,55.07l-1.27,.6Zm-257.67-554.86l259.02,551.12c31.92-15.13,62.76-33.1,91.73-53.42l-350.75-497.7Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1217.75,1466.31l-218.88-465.71,2.42-1.41,296.39,420.57-1.15,.81c-24.45,17.24-50.53,32.43-77.51,45.14l-1.27,.6Zm-209.51-452.37l210.85,448.63c25.96-12.32,51.07-26.94,74.67-43.49l-285.52-405.14Z"
            />
            <text
              className="cls-color"
              transform="translate(1293.19 1471.06) rotate(146.78)"
            >
              <tspan x="0" y="0">
                30
              </tspan>
            </text>
          </g>
          <g id="slice-23-color" className="slices" data-number="23">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1055.35,1625.39l-.13-1.4-56.49-623.87,2.76-.49,164.35,606-1.36,.37c-35,9.51-71.25,15.99-107.74,19.26l-1.4,.13Zm-52.37-609.53l54.91,606.47c35.38-3.25,70.52-9.54,104.5-18.68l-159.41-587.79Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1045.15,1512.61l-.13-1.4-46.27-511.09,2.76-.49,134.7,496.7-1.36,.37c-28.69,7.79-58.4,13.11-88.3,15.79l-1.4,.13Zm-42.15-496.74l44.7,493.69c28.8-2.66,57.4-7.78,85.06-15.21l-129.76-478.48Z"
            />
            <text
              className="cls-color"
              transform="translate(1115.15 1545.12) rotate(172.4)"
            >
              <tspan x="0" y="0">
                23
              </tspan>
            </text>
          </g>
          <g id="slice-5-color" className="slices" data-number="5">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M948.74,1625.6l-1.4-.12c-36.28-3.07-72.55-9.34-107.81-18.66l-1.36-.36,.36-1.36,160.25-605.46,1.04,.27,1.72,.2-52.8,625.48Zm-107.14-21.13c34.22,8.96,69.39,15.04,104.57,18.1l51.21-606.67-155.78,588.57Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M958.27,1512.77l-1.4-.12c-29.74-2.51-59.47-7.66-88.37-15.29l-1.36-.36,.36-1.36,131.28-496,1.14,.3,1.62,.17-43.27,512.66Zm-87.69-17.77c27.86,7.28,56.49,12.23,85.13,14.73l41.69-493.85-126.81,479.11Z"
            />
            <text
              className="cls-color"
              transform="translate(911.91 1548.76) rotate(-170.44)"
            >
              <tspan x="0" y="0">
                5
              </tspan>
            </text>
          </g>
          <g id="slice-16-color" className="slices" data-number="16">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M737.81,1570.39l-1.27-.59c-33.21-15.32-65.16-33.61-94.98-54.37l-1.15-.8,.8-1.15,361.17-519.14-.87,6.07-.09,.2-263.6,569.79Zm-93.5-56.47c28.97,20.07,59.96,37.81,92.13,52.74l255.69-552.7-347.82,499.96Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M785.36,1467.62l-1.27-.59c-27.22-12.56-53.41-27.55-77.85-44.57l-1.15-.8,.8-1.15,296.39-426.03-.76,5.91-.09,.2-216.05,467.02Zm-76.37-46.66c23.6,16.33,48.81,30.76,75,42.93l208.14-449.91-283.14,406.98Z"
            />
            <text
              className="cls-color"
              transform="translate(738.79 1491.16) rotate(-148.5)"
            >
              <tspan x="0" y="0">
                16
              </tspan>
            </text>
          </g>
          <g id="slice-1-color" className="slices" data-number="1">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M558.54,1446.3l-1-.99c-25.88-25.83-49.6-53.99-70.52-83.7l-.81-1.15,1.15-.81,512.42-361.13,3.25,.56-444.5,447.22Zm-68.4-85.16c20.35,28.77,43.35,56.08,68.4,81.18l429.33-431.96-497.73,350.78Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M638.38,1365.97l-1-.99c-21.21-21.17-40.65-44.25-57.8-68.6l-.81-1.15,1.15-.81,419.87-295.9,3.23,.58-1.89,1.9-362.76,364.98Zm-55.68-70.07c16.58,23.42,35.3,45.64,55.68,66.09l349.5-351.63-405.18,285.55Z"
            />
            <text
              className="cls-color"
              transform="translate(577.79 1361.64) rotate(-131.47)"
            >
              <tspan x="0" y="0">
                1
              </tspan>
            </text>
          </g>
          <g id="slice-14-color" className="slices" data-number="14">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M432.27,1270.01l-.6-1.27c-15.62-33.17-28.34-67.73-37.79-102.7l-.37-1.36,1.36-.37,604.58-163.97,.97,2.63-568.14,267.03Zm-35.31-103.35c9.25,33.9,21.58,67.4,36.66,99.61l551.06-259.01-587.72,159.4Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M534.76,1221.84l-.6-1.27c-12.8-27.2-23.22-55.52-30.98-84.17l-.37-1.36,496.63-134.7,.97,2.63-465.66,218.87Zm-28.49-84.82c7.55,27.59,17.58,54.85,29.84,81.08l448.58-210.84-478.42,129.76Z"
            />
            <text
              className="cls-color"
              transform="translate(483.63 1208.02) rotate(-109.65)"
            >
              <tspan x="0" y="0">
                14
              </tspan>
            </text>
          </g>
          <g id="slice-9-color" className="slices" data-number="9">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M374.73,1059.7l-.13-1.4c-3.25-36.21-3.33-73.02-.24-109.42l.12-1.4,1.4,.12,625.69,52.83-.55,2.57-1.03,.1-625.26,56.61Zm2.32-109.19c-2.92,35.31-2.85,71.01,.23,106.14l606.51-54.91-606.73-51.23Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M487.51,1049.49l-.13-1.4c-2.66-29.68-2.72-59.86-.19-89.69l.12-1.4,1.4,.12,512.81,43.3-.47,2.57-1.07,.11-512.48,46.39Zm2.37-89.45c-2.36,28.74-2.3,57.8,.18,86.4l493.75-44.7-493.93-41.7Z"
            />
            <text
              className="cls-color"
              transform="translate(444.61 1009.48) rotate(-89.3)"
            >
              <tspan x="0" y="0">
                9
              </tspan>
            </text>
          </g>
          <g id="slice-18-color" className="slices" data-name="18">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M999.5,1003.04l-606.8-160.63,.36-1.36c9.3-35.31,21.75-69.96,36.99-102.98l.59-1.28,569.81,263.61-.95,2.63Zm-603.37-162.63l588.56,155.8-552.68-255.68c-14.71,32.07-26.78,65.65-35.88,99.88Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M999.51,1003.04l-497.35-131.65,.36-1.36c7.62-28.92,17.82-57.32,30.32-84.4l.59-1.28,1.28,.59,465.76,215.47-.95,2.63Zm-493.91-133.65l479.11,126.82-449.9-208.13c-11.97,26.12-21.79,53.46-29.21,81.31Z"
            />
            <text
              className="cls-color"
              transform="translate(471.83 828.5) rotate(-71.06)"
            >
              <tspan x="0" y="0">
                18
              </tspan>
            </text>
          </g>
          <g id="slice-7-color" className="slices" data-name="7">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M999.06,1002.84L483.62,644.24l.8-1.15c20.9-30.01,44.5-58.27,70.16-83.99l.99-.99,445.28,442.59-1.79,2.15Zm-511.53-359.3l499.95,347.82-431.9-429.29c-24.83,25.01-47.72,52.41-68.05,81.47Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M999.07,1002.84l-422.47-293.92,.8-1.15c17.13-24.59,36.48-47.76,57.51-68.84l.99-.99,364.96,362.76-1.79,2.15Zm-418.56-294.62l406.98,283.14-351.58-349.45c-20.2,20.37-38.83,42.67-55.4,66.32Z"
            />
            <text
              className="cls-color"
              transform="translate(569.88 649.58) rotate(-50.12)"
            >
              <tspan x="0" y="0">
                7
              </tspan>
            </text>
          </g>
          <g id="slice-12-color" className="slices" data-name="12">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M998.71,1002.49L637.09,489.36l1.15-.81c29.85-21.02,61.66-39.54,94.56-55.05l1.27-.6,267.06,568.19-2.42,1.41ZM641.01,490.04l350.75,497.71L732.73,436.64c-31.88,15.11-62.73,33.07-91.72,53.4Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M998.72,1002.49l-296.4-420.58,1.15-.81c24.48-17.24,50.55-32.42,77.51-45.12l1.27-.6,218.89,465.7-2.42,1.41Zm-292.48-419.9l285.53,405.15-210.86-448.62c-25.93,12.31-51.04,26.92-74.67,43.46Z"
            />
            <text
              className="cls-color"
              transform="translate(706.04 529.9) rotate(-29.91)"
            >
              <tspan x="0" y="0">
                12
              </tspan>
            </text>
          </g>
          <g id="slice-3-color" className="slices" data-name="3">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M998.78,1000.37l-164.37-606.02,1.36-.37c35.19-9.52,71.44-16,107.75-19.25l1.4-.12,.13,1.4,56.49,623.87-2.76,.49Zm-160.92-604.04l159.43,587.81-54.92-606.48c-35.21,3.23-70.36,9.51-104.51,18.67Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M998.79,1000.37l-134.72-496.71,1.36-.37c28.81-7.8,58.53-13.11,88.32-15.78l1.4-.13,.13,1.4,46.28,511.09-2.76,.49Zm-131.27-494.73l129.78,478.5-44.7-493.69c-28.69,2.65-57.3,7.76-85.08,15.2Z"
            />
            <text
              className="cls-color"
              transform="translate(894.17 453.77) rotate(-10.91)"
            >
              <tspan x="0" y="0">
                3
              </tspan>
            </text>
          </g>
          <g id="slice-34-color" className="slices" data-name="34">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1625.52,1054.22l-625.5-52.82v-2.8s625.26-56.6,625.26-56.6l.13,1.4c3.24,36.04,3.32,72.85,.23,109.42l-.12,1.4Zm-609.26-54.27l606.7,51.23c2.91-35.47,2.84-71.16-.22-106.13l-606.47,54.89Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-13"
              d="M1512.7,1044.69l-512.67-43.29v-2.8s512.47-46.39,512.47-46.39l.13,1.4c2.66,29.53,2.72,59.71,.19,89.68l-.12,1.4Zm-496.43-44.74l493.87,41.71c2.36-28.88,2.3-57.93-.18-86.39l-493.69,44.69Z"
            />
            <text
              className="cls-color"
              transform="translate(1556.08 980.61) rotate(90)"
            >
              <tspan x="0" y="0">
                34
              </tspan>
            </text>
          </g>
        </g>
        <g id="red-color" data-name="red">
          <g id="slice-26-color" className="slices" data-number="26">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M998.74,1000.13l-56.8-625.14,1.4-.13c36.29-3.29,73.1-3.41,109.42-.36l1.4,.12-.12,1.4-52.5,624.1h-2.8Zm-53.74-622.58l55.09,606.34,51.04-606.69c-35.23-2.88-70.92-2.76-106.13,.35Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M998.74,1000.13l-46.55-512.38,1.4-.13c29.74-2.69,59.92-2.79,89.68-.3l1.4,.12-.12,1.4-43.01,511.28h-2.8Zm-43.5-509.82l44.85,493.58,41.55-493.87c-28.69-2.32-57.73-2.23-86.39,.29Z"
            />
            <text className="cls-5" transform="translate(976.79 444.41)">
              <tspan x="0" y="0">
                26
              </tspan>
            </text>
          </g>
          <g id="slice-15-color" className="slices" data-number="15">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1001.44,1002.3l-2.63-.95,159.87-607.13,1.36,.36c35.31,9.37,69.95,21.84,102.96,37.08l1.27,.59-.59,1.28-262.25,568.77Zm159.24-604.64l-155.07,588.88,254.93-552.91c-32.05-14.7-65.63-26.8-99.86-35.96Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1001.44,1002.29l-2.63-.95,131.04-497.62,1.36,.36c28.96,7.69,57.35,17.91,84.38,30.39l1.27,.59-.59,1.28-214.83,465.95Zm130.4-495.13l-126.23,479.36,207.52-450.09c-26.08-11.95-53.41-21.79-81.29-29.27Z"
            />
            <text
              className="cls-7"
              transform="translate(1167.43 470.5) rotate(19.61)"
            >
              <tspan x="0" y="0">
                15
              </tspan>
            </text>
          </g>
          <g id="slice-4-color" className="slices" data-number="4">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1001.16,1002.7l-2.15-1.79,358.39-515.48,1.15,.81c29.96,20.91,58.22,44.51,84,70.14l1,.99-.99,1-441.4,444.34Zm356.94-513.36l-347.62,499.98,429.09-431.95c-25.07-24.81-52.46-47.68-81.48-68.03Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1001.16,1002.7l-2.15-1.79,293.75-422.5,1.15,.81c24.57,17.15,47.73,36.5,68.85,57.49l1,.99-.99,1-361.6,364.02Zm292.3-420.38l-282.97,407,349.29-351.62c-20.4-20.17-42.7-38.79-66.32-55.38Z"
            />
            <text
              className="cls-5"
              transform="translate(1349.55 566.62) rotate(39.14)"
            >
              <tspan x="0" y="0">
                4
              </tspan>
            </text>
          </g>
          <g id="slice-2-color" className="slices" data-number="color">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1000.74,1001.27l-1.41-2.42s511-358.75,512.8-359.97c14.16,18.95,40.73,60.98,56.19,93.87l.6,1.27-568.18,267.25Zm511.18-358.8l-497.84,349.42,551.1-259.22c-15.07-31.87-32.86-61.19-53.26-90.2Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1000.74,1001.27l-1.41-2.42,420.52-296.55,.81,1.15c17.3,24.47,32.49,50.55,45.17,77.51l.6,1.27-465.69,219.05Zm418.44-295.06l-405.11,285.68,448.61-211.01c-12.28-25.94-26.91-51.04-43.51-74.67Z"
            />
            <text
              className="cls-1"
              transform="translate(1475.29 711.6) rotate(58.88)"
            >
              <tspan x="0" y="0">
                2
              </tspan>
            </text>
          </g>
          <g id="slice-6-color" className="slices" data-number="6">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1606.76,1161.82l-1.36-.36-605.62-160.1,.48-2.76,625.48,52.63-.12,1.4c-3.04,36.49-9.27,72.78-18.51,107.84l-.36,1.36Zm-590.73-159.08l588.73,155.64c8.88-34.03,14.92-69.21,17.95-104.6l-606.68-51.04Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1497.27,1132.88l-1.36-.36-496.13-131.16,.48-2.76,512.65,43.14-.12,1.4c-2.49,29.89-7.59,59.63-15.17,88.38l-.36,1.36Zm-481.24-130.13l479.24,126.7c7.22-27.72,12.13-56.36,14.61-85.14l-493.85-41.55Z"
            />
            <text
              className="cls-1"
              transform="translate(1549.05 1084.85) rotate(97.1)"
            >
              <tspan x="0" y="0">
                6
              </tspan>
            </text>
          </g>
          <g id="slice-13-color" className="slices" data-number="13">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1514.81,1359.55l-515.48-358.39,1.39-2.43,569.96,263.45-.59,1.28c-15.26,33.01-33.59,64.95-54.48,94.94l-.8,1.15Zm-500.69-351.53l499.99,347.62c20.2-29.14,37.97-60.11,52.84-92.09l-552.83-255.53Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1421.84,1294.9l-422.5-293.75,1.39-2.43,467.16,215.93-.59,1.28c-12.51,27.05-27.53,53.23-44.66,77.82l-.8,1.15Zm-407.71-286.89l407.01,282.98c16.43-23.73,30.9-48.94,43.02-74.96l-450.03-208.01Z"
            />
            <text
              className="cls-1"
              transform="translate(1491.67 1258.74) rotate(118.37)"
            >
              <tspan x="0" y="0">
                13
              </tspan>
            </text>
          </g>
          <g id="slice-11-color" className="slices" data-number="11">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1360.8,1513.9l-.81-1.15-361-511.94,2.14-1.81,445.36,442.4-.99,1c-25.7,25.88-53.81,49.67-83.55,70.68l-1.15,.81Zm-350.26-501.58l350.93,497.66c28.8-20.45,56.05-43.51,81.04-68.56l-431.97-429.11Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1295.54,1421.35l-.81-1.15-295.74-419.39,2.14-1.81,365.03,362.6-.99,1c-21.08,21.23-44.12,40.72-68.48,57.94l-1.15,.81Zm-285-409.04l285.67,405.12c23.42-16.65,45.6-35.42,65.97-55.81l-351.64-349.3Z"
            />
            <text
              className="cls-7"
              transform="translate(1372.48 1412.17) rotate(138.16)"
            >
              <tspan x="0" y="0">
                11
              </tspan>
            </text>
          </g>
          <g id="slice-8-color" className="slices" data-number="8">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1163.29,1606.26l-.37-1.35-164.14-604.53,2.63-.97,267.25,568.18-1.27,.6c-32.81,15.45-67.38,28.14-102.74,37.71l-1.36,.37Zm-157.59-591.13l159.56,587.68c34.28-9.36,67.79-21.66,99.65-36.57l-259.22-551.1Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1133.62,1496.97l-.37-1.35-134.47-495.25,2.63-.97,219.04,465.69-1.27,.6c-26.9,12.67-55.23,23.06-84.21,30.91l-1.36,.37Zm-127.91-481.84l129.89,478.39c27.9-7.63,55.17-17.64,81.12-29.77l-211.01-448.62Z"
            />
            <text
              className="cls-7"
              transform="translate(1203.03 1518.64) rotate(164.71)"
            >
              <tspan x="0" y="0">
                8
              </tspan>
            </text>
          </g>
          <g id="slice-10-color" className="slices" data-number="10">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1000.06,1627.7c-17.54,0-35.09-.73-52.53-2.19l-1.4-.12,.12-1.4,52.5-624.1,.89,.07,1.91-.09,56.8,625.13-1.4,.13c-18.86,1.71-37.87,2.57-56.88,2.57Zm-50.9-4.87c35.26,2.87,70.94,2.74,106.13-.37l-55.09-606.33-51.03,606.7Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1000.08,1514.47c-14.38,0-28.77-.6-43.06-1.79l-1.4-.12,.12-1.4,43-511.27,.89,.07,1.91-.09,46.56,512.37-1.4,.13c-15.45,1.4-31.03,2.1-46.62,2.1Zm-41.43-4.48c28.7,2.32,57.75,2.22,86.39-.3l-44.85-493.57-41.54,493.87Z"
            />
            <text
              className="cls-5"
              transform="translate(1022.82 1555.42) rotate(-180)"
            >
              <tspan x="0" y="0">
                10
              </tspan>
            </text>
          </g>
          <g id="slice-24-color" className="slices" data-number="24">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M841.02,1607.33l-1.36-.36c-35.36-9.31-70.02-21.76-102.99-37.02l-1.27-.59,.59-1.27,265.56-574.47v6.57l-.05,.19-160.48,606.96Zm-101.9-39.34c32.02,14.73,65.62,26.8,99.9,35.91l155.66-588.74-255.56,552.83Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M869.97,1497.85l-1.36-.36c-28.99-7.63-57.39-17.84-84.42-30.35l-1.27-.59,.59-1.27,218.04-471.67v6.57l-.05,.19-131.53,497.48Zm-83.32-32.67c26.07,11.97,53.42,21.8,81.32,29.23l126.71-479.26-208.03,450.03Z"
            />
            <text
              className="cls-1"
              transform="translate(831.63 1530.62) rotate(-158.46)"
            >
              <tspan x="0" y="0">
                24
              </tspan>
            </text>
          </g>
          <g id="slice-33-color" className="slices" data-number="33">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M642.9,1516.31l-1.15-.81c-29.98-20.93-58.24-44.54-84-70.16l-1-.99,442.78-445.74,3.33-.06-1.57,2.25-358.39,515.5Zm-82.18-71.97c25.05,24.8,52.45,47.68,81.48,68.05l347.66-500.05-429.13,432Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M707.55,1423.32l-1.15-.81c-24.57-17.15-47.73-36.5-68.85-57.5l-1-.99,362.99-365.42h3.29l-295.28,424.72Zm-67.02-59.31c20.4,20.18,42.7,38.8,66.32,55.39l283.01-407.06-349.33,351.67Z"
            />
            <text
              className="cls-7"
              transform="translate(660.41 1439.92) rotate(-139.7)"
            >
              <tspan x="0" y="0">
                33
              </tspan>
            </text>
          </g>
          <g id="slice-20-color" className="slices" data-number="20">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M487.79,1362.71c-6.7-8.11-40.56-60.85-55.96-93.64l-.71-1.56,568.4-267.05,1.41,2.42s-510.8,358.19-513.13,359.83Zm-52.92-93.75c15.01,31.78,33.15,60.74,53.6,89.83l497.71-348.95-551.31,259.12Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M580.44,1299.41l-.81-1.15c-17.34-24.56-32.53-50.63-45.15-77.5l-.6-1.27,465.63-219.03,1.41,2.42-420.49,296.53Zm-42.81-78.57c12.23,25.85,26.86,50.96,43.49,74.66l405.07-285.65-448.56,210.99Z"
            />
            <text
              className="cls-1"
              transform="translate(530.71 1299.1) rotate(-119.59)"
            >
              <tspan x="0" y="0">
                20
              </tspan>
            </text>
          </g>
          <g id="slice-31-color" className="slices" data-number="31">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M394.65,1167.57l-.37-1.36c-9.5-35.09-15.98-71.34-19.27-107.72l-.13-1.4,626.68-56.93v2.61l-1.04,.29-605.88,164.5Zm-16.71-107.93c3.26,35.28,9.55,70.41,18.69,104.48l587.71-159.57-606.4,55.09Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M503.93,1137.9l-.37-1.36c-7.78-28.77-13.09-58.47-15.79-88.29l-.13-1.4,513.92-46.69v2.61l-1.04,.29-496.6,134.83Zm-13.23-88.5c2.67,28.71,7.79,57.31,15.21,85.05l478.45-129.9-493.66,44.85Z"
            />
            <text
              className="cls-5"
              transform="translate(456.6 1119.93) rotate(-98.88)"
            >
              <tspan x="0" y="0">
                31
              </tspan>
            </text>
          </g>
          <g id="slice-22-color" className="slices" data-number="22">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1000.04,1003.11l-625.49-52.63,.12-1.4c3.02-36.39,9.25-72.67,18.52-107.84l.36-1.36,606.98,160.48-.48,2.76Zm-622.46-55.2l606.69,51.05-588.73-155.65c-8.91,34.14-14.95,69.31-17.96,104.6Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1000.05,1003.11l-512.67-43.14,.12-1.4c2.47-29.81,7.58-59.55,15.18-88.39l.36-1.36,497.49,131.53-.48,2.76Zm-509.63-45.7l493.86,41.56-479.25-126.7c-7.24,27.81-12.16,56.44-14.62,85.15Z"
            />
            <text
              className="cls-7"
              transform="translate(448.72 927.82) rotate(-80.06)"
            >
              <tspan x="0" y="0">
                22
              </tspan>
            </text>
          </g>
          <g id="slice-29-color" className="slices" data-number="29">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M999.57,1002.98L429.61,739.51l.59-1.28c15.36-33.19,33.69-65.12,54.48-94.92l.8-1.15,1.15,.8,514.33,357.59-1.39,2.43ZM433.34,738.14l552.83,255.56-499.99-347.62c-20.1,28.95-37.87,59.91-52.84,92.06Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M999.58,1002.98l-467.16-215.95,.59-1.28c12.59-27.2,27.61-53.37,44.66-77.8l.8-1.15,1.15,.8,421.35,292.94-1.39,2.43Zm-463.42-217.32l450.03,208.03-407.01-282.97c-16.35,23.57-30.82,48.78-43.02,74.94Z"
            />
            <text
              className="cls-5"
              transform="translate(507.35 744.13) rotate(-59.73)"
            >
              <tspan x="0" y="0">
                29
              </tspan>
            </text>
          </g>
          <g id="slice-28-color" className="slices" data-number="28">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M999.17,1002.7l-445.37-442.41,.99-1c25.74-25.89,53.84-49.66,83.55-70.66l1.15-.81,.81,1.15,361.01,511.92-2.14,1.81Zm-441.39-442.42l431.98,429.11-350.94-497.65c-28.77,20.43-56.02,43.48-81.04,68.54Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M999.18,1002.7l-365.03-362.61,.99-1c21.11-21.23,44.14-40.71,68.48-57.91l1.15-.81,.81,1.15,295.74,419.38-2.14,1.81Zm-361.06-362.62l351.64,349.31-285.68-405.1c-23.4,16.63-45.58,35.39-65.97,55.79Z"
            />
            <text
              className="cls-7"
              transform="translate(625.3 591.15) rotate(-40)"
            >
              <tspan x="0" y="0">
                28
              </tspan>
            </text>
          </g>
          <g id="slice-35-color" className="slices" data-number="35">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M998.87,1000.6L731.59,432.41l1.27-.6c32.99-15.5,67.57-28.18,102.76-37.7l1.35-.37,.37,1.35,164.15,604.53-2.63,.97ZM735.33,433.76l259.24,551.12-159.57-587.68c-34.11,9.31-67.63,21.6-99.67,36.56Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M998.87,1000.6l-219.06-465.7,1.27-.6c27.02-12.69,55.35-23.09,84.23-30.9l1.35-.37,.37,1.35,134.47,495.25-2.63,.97Zm-215.32-464.35l211.03,448.63-129.89-478.39c-27.79,7.6-55.07,17.61-81.14,29.76Z"
            />
            <text
              className="cls-5"
              transform="translate(787.3 486.53) rotate(-20.66)"
            >
              <tspan x="0" y="0">
                35
              </tspan>
            </text>
          </g>
          <g id="slice-17-color" className="slices" data-number="17">
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1000.27,1001.4l-.5-2.76,605.89-164.49,.37,1.36c9.46,34.93,15.94,71.17,19.26,107.71l.13,1.4-625.15,56.78Zm603.42-163.8l-587.68,159.55,606.36-55.08c-3.3-35.43-9.58-70.56-18.68-104.47Z"
            />
            <path
              style={{
                fill: props.colorSliceColor,
              }}
              className="cls-9"
              d="M1000.27,1001.4l-.5-2.76,496.6-134.82,.37,1.36c7.75,28.62,13.06,58.33,15.79,88.28l.13,1.4-512.39,46.54Zm494.13-134.13l-478.39,129.88,493.59-44.83c-2.7-28.85-7.81-57.44-15.21-85.04Z"
            />
            <text
              className="cls-1"
              transform="translate(1543.51 880.71) rotate(79.23)"
            >
              <tspan x="0" y="0">
                17
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g id="white-slices">
        <g id="red">
          <g className="slices" id="slice-26" data-number="26">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M998.74,1000.15l-56.8-625.14,1.4-.13c36.29-3.29,73.1-3.41,109.42-.36l1.4,.12-.12,1.4-52.5,624.1h-2.8Zm-53.74-622.58l55.09,606.34,51.04-606.69c-35.23-2.88-70.92-2.76-106.13,.35Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M998.74,1000.15l-46.55-512.38,1.4-.13c29.74-2.69,59.92-2.79,89.68-.3l1.4,.12-.12,1.4-43.01,511.28h-2.8Zm-43.5-509.82l44.85,493.58,41.55-493.87c-28.69-2.32-57.73-2.23-86.39,.29Z"
            />
            <text className="cls-4" transform="translate(976.79 444.44)">
              <tspan x="0" y="0">
                26
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-15" data-number="15">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1001.44,1002.32l-2.63-.95,159.87-607.13,1.36,.36c35.31,9.37,69.95,21.84,102.96,37.08l1.27,.59-.59,1.28-262.25,568.77Zm159.24-604.64l-155.07,588.88,254.93-552.91c-32.05-14.7-65.63-26.8-99.86-35.96Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1001.44,1002.32l-2.63-.95,131.04-497.62,1.36,.36c28.96,7.69,57.35,17.91,84.38,30.39l1.27,.59-.59,1.28-214.83,465.95Zm130.4-495.13l-126.23,479.36,207.52-450.09c-26.08-11.95-53.41-21.79-81.29-29.27Z"
            />
            <text
              className="cls-3"
              transform="translate(1167.43 470.52) rotate(19.61)"
            >
              <tspan x="0" y="0">
                15
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-4" data-number="4">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1001.16,1002.72l-2.15-1.79,358.39-515.48,1.15,.81c29.96,20.91,58.22,44.51,84,70.14l1,.99-.99,1-441.4,444.34Zm356.94-513.36l-347.62,499.98,429.09-431.95c-25.07-24.81-52.46-47.68-81.48-68.03Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1001.16,1002.72l-2.15-1.79,293.75-422.5,1.15,.81c24.57,17.15,47.73,36.5,68.85,57.49l1,.99-.99,1-361.6,364.02Zm292.3-420.38l-282.97,407,349.29-351.62c-20.4-20.17-42.7-38.79-66.32-55.38Z"
            />
            <text
              className="cls-4"
              transform="translate(1349.55 566.65) rotate(39.14)"
            >
              <tspan x="0" y="0">
                4
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-2" data-number="2">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1000.74,1001.3l-1.41-2.42s511-358.75,512.8-359.97c14.16,18.95,40.73,60.98,56.19,93.87l.6,1.27-568.18,267.25Zm511.18-358.8l-497.84,349.42,551.1-259.22c-15.07-31.87-32.86-61.19-53.26-90.2Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1000.74,1001.3l-1.41-2.42,420.52-296.55,.81,1.15c17.3,24.47,32.49,50.55,45.17,77.51l.6,1.27-465.69,219.05Zm418.44-295.06l-405.11,285.68,448.61-211.01c-12.28-25.94-26.91-51.04-43.51-74.67Z"
            />
            <text
              className="cls-8"
              transform="translate(1475.29 711.62) rotate(58.88)"
            >
              <tspan x="0" y="0">
                2
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-6" data-number="6">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1606.76,1161.85l-1.36-.36-605.62-160.1,.48-2.76,625.48,52.63-.12,1.4c-3.04,36.49-9.27,72.78-18.51,107.84l-.36,1.36Zm-590.73-159.08l588.73,155.64c8.88-34.03,14.92-69.21,17.95-104.6l-606.68-51.04Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1497.27,1132.9l-1.36-.36-496.13-131.16,.48-2.76,512.65,43.14-.12,1.4c-2.49,29.89-7.59,59.63-15.17,88.38l-.36,1.36Zm-481.24-130.13l479.24,126.7c7.22-27.72,12.13-56.36,14.61-85.14l-493.85-41.55Z"
            />
            <text
              className="cls-8"
              transform="translate(1549.05 1084.87) rotate(97.1)"
            >
              <tspan x="0" y="0">
                6
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-13" data-number="13">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1514.81,1359.57l-515.48-358.39,1.39-2.43,569.96,263.45-.59,1.28c-15.26,33.01-33.59,64.95-54.48,94.94l-.8,1.15Zm-500.69-351.53l499.99,347.62c20.2-29.14,37.97-60.11,52.84-92.09l-552.83-255.53Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1421.84,1294.93l-422.5-293.75,1.39-2.43,467.16,215.93-.59,1.28c-12.51,27.05-27.53,53.23-44.66,77.82l-.8,1.15Zm-407.71-286.89l407.01,282.98c16.43-23.73,30.9-48.94,43.02-74.96l-450.03-208.01Z"
            />
            <text
              className="cls-8"
              transform="translate(1491.67 1258.76) rotate(118.37)"
            >
              <tspan x="0" y="0">
                13
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-11" data-number="11">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1360.8,1513.93l-.81-1.15-361-511.94,2.14-1.81,445.36,442.4-.99,1c-25.7,25.88-53.81,49.67-83.55,70.68l-1.15,.81Zm-350.26-501.58l350.93,497.66c28.8-20.45,56.05-43.51,81.04-68.56l-431.97-429.11Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1295.54,1421.37l-.81-1.15-295.74-419.39,2.14-1.81,365.03,362.6-.99,1c-21.08,21.23-44.12,40.72-68.48,57.94l-1.15,.81Zm-285-409.04l285.67,405.12c23.42-16.65,45.6-35.42,65.97-55.81l-351.64-349.3Z"
            />
            <text
              className="cls-3"
              transform="translate(1372.48 1412.19) rotate(138.16)"
            >
              <tspan x="0" y="0">
                11
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-8" data-number="8">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1163.29,1606.28l-.37-1.35-164.14-604.53,2.63-.97,267.25,568.18-1.27,.6c-32.81,15.45-67.38,28.14-102.74,37.71l-1.36,.37Zm-157.59-591.13l159.56,587.68c34.28-9.36,67.79-21.66,99.65-36.57l-259.22-551.1Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1133.62,1496.99l-.37-1.35-134.47-495.25,2.63-.97,219.04,465.69-1.27,.6c-26.9,12.67-55.23,23.06-84.21,30.91l-1.36,.37Zm-127.91-481.84l129.89,478.39c27.9-7.63,55.17-17.64,81.12-29.77l-211.01-448.62Z"
            />
            <text
              className="cls-3"
              transform="translate(1203.03 1518.66) rotate(164.71)"
            >
              <tspan x="0" y="0">
                8
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-24" data-number="24">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M841.02,1607.36l-1.36-.36c-35.36-9.31-70.02-21.76-102.99-37.02l-1.27-.59,.59-1.27,265.56-574.47v6.57l-.05,.19-160.48,606.96Zm-101.9-39.34c32.02,14.73,65.62,26.8,99.9,35.91l155.66-588.74-255.56,552.83Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M869.97,1497.87l-1.36-.36c-28.99-7.63-57.39-17.84-84.42-30.35l-1.27-.59,.59-1.27,218.04-471.67v6.57l-.05,.19-131.53,497.48Zm-83.32-32.67c26.07,11.97,53.42,21.8,81.32,29.23l126.71-479.26-208.03,450.03Z"
            />
            <text
              className="cls-8"
              transform="translate(831.63 1530.64) rotate(-158.46)"
            >
              <tspan x="0" y="0">
                24
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-33" data-number="33">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M642.9,1516.33l-1.15-.81c-29.98-20.93-58.24-44.54-84-70.16l-1-.99,442.78-445.74,3.33-.06-1.57,2.25-358.39,515.5Zm-82.18-71.97c25.05,24.8,52.45,47.68,81.48,68.05l347.66-500.05-429.13,432Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M707.55,1423.35l-1.15-.81c-24.57-17.15-47.73-36.5-68.85-57.5l-1-.99,362.99-365.42h3.29l-295.28,424.72Zm-67.02-59.31c20.4,20.18,42.7,38.8,66.32,55.39l283.01-407.06-349.33,351.67Z"
            />
            <text
              className="cls-3"
              transform="translate(660.41 1439.95) rotate(-139.7)"
            >
              <tspan x="0" y="0">
                33
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-20" data-number="20">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M487.79,1362.74c-6.7-8.11-40.56-60.85-55.96-93.64l-.71-1.56,568.4-267.05,1.41,2.42s-510.8,358.19-513.13,359.83Zm-52.92-93.75c15.01,31.78,33.15,60.74,53.6,89.83l497.71-348.95-551.31,259.12Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M580.44,1299.43l-.81-1.15c-17.34-24.56-32.53-50.63-45.15-77.5l-.6-1.27,465.63-219.03,1.41,2.42-420.49,296.53Zm-42.81-78.57c12.23,25.85,26.86,50.96,43.49,74.66l405.07-285.65-448.56,210.99Z"
            />
            <text
              className="cls-8"
              transform="translate(530.71 1299.12) rotate(-119.59)"
            >
              <tspan x="0" y="0">
                20
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-31" data-number="31">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M394.65,1167.6l-.37-1.36c-9.5-35.09-15.98-71.34-19.27-107.72l-.13-1.4,626.68-56.93v2.61l-1.04,.29-605.88,164.5Zm-16.71-107.93c3.26,35.28,9.55,70.41,18.69,104.48l587.71-159.57-606.4,55.09Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M503.93,1137.93l-.37-1.36c-7.78-28.77-13.09-58.47-15.79-88.29l-.13-1.4,513.92-46.69v2.61l-1.04,.29-496.6,134.83Zm-13.23-88.5c2.67,28.71,7.79,57.31,15.21,85.05l478.45-129.9-493.66,44.85Z"
            />
            <text
              className="cls-4"
              transform="translate(456.6 1119.96) rotate(-98.88)"
            >
              <tspan x="0" y="0">
                31
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-22" data-number="22">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1000.04,1003.13l-625.49-52.63,.12-1.4c3.02-36.39,9.25-72.67,18.52-107.84l.36-1.36,606.98,160.48-.48,2.76Zm-622.46-55.2l606.69,51.05-588.73-155.65c-8.91,34.14-14.95,69.31-17.96,104.6Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1000.05,1003.13l-512.67-43.14,.12-1.4c2.47-29.81,7.58-59.55,15.18-88.39l.36-1.36,497.49,131.53-.48,2.76Zm-509.63-45.7l493.86,41.56-479.25-126.7c-7.24,27.81-12.16,56.44-14.62,85.15Z"
            />
            <text
              className="cls-3"
              transform="translate(448.72 927.85) rotate(-80.06)"
            >
              <tspan x="0" y="0">
                22
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-29" data-number="29">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.57,1003.01L429.61,739.53l.59-1.28c15.36-33.19,33.69-65.12,54.48-94.92l.8-1.15,1.15,.8,514.33,357.59-1.39,2.43ZM433.34,738.16l552.83,255.56-499.99-347.62c-20.1,28.95-37.87,59.91-52.84,92.06Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.58,1003.01l-467.16-215.95,.59-1.28c12.59-27.2,27.61-53.37,44.66-77.8l.8-1.15,1.15,.8,421.35,292.94-1.39,2.43Zm-463.42-217.32l450.03,208.03-407.01-282.97c-16.35,23.57-30.82,48.78-43.02,74.94Z"
            />
            <text
              className="cls-4"
              transform="translate(507.35 744.16) rotate(-59.73)"
            >
              <tspan x="0" y="0">
                29
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-28" data-number="28">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.17,1002.73l-445.37-442.41,.99-1c25.74-25.89,53.84-49.66,83.55-70.66l1.15-.81,.81,1.15,361.01,511.92-2.14,1.81Zm-441.39-442.42l431.98,429.11-350.94-497.65c-28.77,20.43-56.02,43.48-81.04,68.54Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.18,1002.73l-365.03-362.61,.99-1c21.11-21.23,44.14-40.71,68.48-57.91l1.15-.81,.81,1.15,295.74,419.38-2.14,1.81Zm-361.06-362.62l351.64,349.31-285.68-405.1c-23.4,16.63-45.58,35.39-65.97,55.79Z"
            />
            <text
              className="cls-3"
              transform="translate(625.3 591.18) rotate(-40)"
            >
              <tspan x="0" y="0">
                28
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-35" data-number="35">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M998.87,1000.63L731.59,432.43l1.27-.6c32.99-15.5,67.57-28.18,102.76-37.7l1.35-.37,.37,1.35,164.15,604.53-2.63,.97ZM735.33,433.78l259.24,551.12-159.57-587.68c-34.11,9.31-67.63,21.6-99.67,36.56Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M998.87,1000.62l-219.06-465.7,1.27-.6c27.02-12.69,55.35-23.09,84.23-30.9l1.35-.37,.37,1.35,134.47,495.25-2.63,.97Zm-215.32-464.35l211.03,448.63-129.89-478.39c-27.79,7.6-55.07,17.61-81.14,29.76Z"
            />
            <text
              className="cls-4"
              transform="translate(787.3 486.56) rotate(-20.66)"
            >
              <tspan x="0" y="0">
                35
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-10" data-number="10">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.88,1627.67c-17.54,0-35.09-.73-52.53-2.19l-1.4-.12,.12-1.4,52.5-624.1,.89,.07,1.91-.09,56.79,625.32-1.4,.13c-18.86,1.71-37.85,2.38-56.87,2.38Zm-50.9-4.87c35.26,2.87,70.94,2.74,106.13-.37l-55.09-606.33-51.03,606.7Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.91,1514.45c-14.38,0-28.77-.6-43.06-1.79l-1.4-.12,.12-1.4,43-511.27,.89,.07,1.91-.09,46.56,512.37-1.4,.13c-15.45,1.4-31.03,2.1-46.62,2.1Zm-41.43-4.48c28.7,2.32,57.75,2.22,86.39-.3l-44.85-493.57-41.54,493.87Z"
            />
            <text
              className="cls-4"
              transform="translate(1022.64 1555.39) rotate(-180)"
            >
              <tspan x="0" y="0">
                10
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-17" data-number="17">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1000.27,1001.43l-.5-2.76,605.89-164.49,.37,1.36c9.46,34.93,15.94,71.17,19.26,107.71l.13,1.4-625.15,56.78Zm603.42-163.8l-587.68,159.55,606.36-55.08c-3.3-35.43-9.58-70.56-18.68-104.47Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1000.27,1001.43l-.5-2.76,496.6-134.82,.37,1.36c7.75,28.62,13.06,58.33,15.79,88.28l.13,1.4-512.39,46.54Zm494.13-134.13l-478.39,129.88,493.59-44.83c-2.7-28.85-7.81-57.44-15.21-85.04Z"
            />
            <text
              className="cls-8"
              transform="translate(1543.51 880.73) rotate(79.23)"
            >
              <tspan x="0" y="0">
                17
              </tspan>
            </text>
          </g>
        </g>
        <g id="blue">
          <polygon
            className="cls-10"
            points="999.62 1003.1 999.8 1001.98 999.29 1000.42 999.66 1000.28 1000.1 1000.33 1007.1 1001.54 1000.17 1003.09 999.81 1002.01 999.62 1003.1"
          />
          <polygon
            className="cls-10"
            points="999.65 1003.1 999.82 1001.95 999.22 1000.46 999.61 1000.27 1000.09 1000.33 1006.19 1001.3 1000.27 1003.06 999.83 1001.97 999.65 1003.1"
          />
          <polygon
            className="cls-10"
            points="1000.16 1003.15 1000.15 1002.02 999.37 1000.57 999.71 1000.36 1000.16 1000.34 1007.27 1000.34 1000.69 1003.04 1000.16 1002.04 1000.16 1003.15"
          />
          <polygon
            className="cls-10"
            points="1000.17 1003.15 1000.16 1001.97 999.31 1000.62 999.68 1000.36 1000.17 1000.34 1006.12 1000.34 1000.79 1003 1000.17 1001.99 1000.17 1003.15"
          />
          <g className="slices" id="slice-32" data-number="32">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1001.5,1000.39l-2.76-.48,52.81-625.49,1.4,.12c36.31,3.07,72.58,9.35,107.81,18.67l1.36,.36-.36,1.36-160.26,605.45Zm52.61-622.92l-51.22,606.68,155.79-588.57c-34.19-8.96-69.36-15.05-104.57-18.11Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1001.5,1000.38l-2.76-.48,43.28-512.66,1.4,.12c29.76,2.52,59.49,7.67,88.37,15.3l1.36,.36-.36,1.36-131.29,496Zm43.08-510.1l-41.69,493.86,126.82-479.12c-27.84-7.28-56.47-12.23-85.13-14.74Z"
            />
            <text
              className="cls-3"
              transform="translate(1077.44 449.1) rotate(11.6)"
            >
              <tspan x="0" y="0">
                32
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-19" data-number="19">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1001.02,1002.51l-2.43-1.39,263.04-570.07,1.28,.59c33.15,15.37,65.09,33.68,94.94,54.42l1.15,.8-.8,1.15-357.18,514.49Zm261.98-567.72l-255.13,552.93,347.22-500.14c-29-20.05-59.97-37.8-92.09-52.78Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1001.02,1002.51l-2.43-1.39,215.59-467.24,1.28,.59c27.18,12.61,53.36,27.62,77.81,44.6l1.15,.8-.8,1.15-292.61,421.48Zm214.54-464.9l-207.69,450.1,282.65-407.13c-23.6-16.3-48.81-30.75-74.96-42.97Z"
            />
            <text
              className="cls-4"
              transform="translate(1260.42 510.48) rotate(28.43)"
            >
              <tspan x="0" y="0">
                19
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-21" data-number="21">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.44,1000.38l-.29,.65,442.31-445.59,1,.99c25.86,25.8,49.59,53.96,70.52,83.68l.81,1.15-1.15,.81-513.19,358.31Zm442.02-440.96l-429.28,431.9,497.68-350.73c-20.37-28.79-43.37-56.08-68.4-81.16Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.8,1001.98l-.8-1.05,362.62-365.18,1,.99c21.21,21.17,40.66,44.24,57.8,68.58l.81,1.15-1.15,.81-420.28,294.7Zm361.83-362.25l-349.45,351.58,405.13-285.51c-16.58-23.41-35.3-45.62-55.68-66.07Z"
            />
            <text
              className="cls-4"
              transform="translate(1416.2 632.25) rotate(50.75)"
            >
              <tspan x="0" y="0">
                21
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-25" data-number="25">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1000.51,1001.38l-.97-2.63,568.18-267.06,.6,1.27c15.59,33.07,28.31,67.63,37.82,102.71l.37,1.36-1.36,.37-604.65,163.98Zm565.87-265.95l-551.11,259.03,587.79-159.41c-9.3-34.01-21.64-67.51-36.69-99.62Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1000.51,1001.38l-.97-2.63,465.7-218.89,.6,1.27c12.78,27.11,23.2,55.43,31,84.18l.37,1.36-496.69,134.71Zm463.38-217.78l-448.62,210.86,478.48-129.77c-7.58-27.68-17.62-54.95-29.86-81.09Z"
            />
            <text
              className="cls-3"
              transform="translate(1515.97 793.24) rotate(68.94)"
            >
              <tspan x="0" y="0">
                25
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-27" data-number="27">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1569.36,1264.89l-569.81-263.59,.95-2.63,606.79,160.62-.36,1.36c-9.34,35.41-21.78,70.05-36.98,102.97l-.59,1.28Zm-554.06-259.4l552.68,255.67c14.67-31.97,26.73-65.56,35.87-99.88l-588.55-155.79Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1466.58,1217.35l-467.03-216.05,.95-2.63,497.34,131.65-.36,1.36c-7.65,29.01-17.85,57.4-30.31,84.4l-.59,1.28Zm-451.27-211.85l449.9,208.12c11.93-26.04,21.75-53.38,29.2-81.3l-479.09-126.82Z"
            />
            <text
              className="cls-3"
              transform="translate(1528.06 1177.71) rotate(108.63)"
            >
              <tspan x="0" y="0">
                27
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-36" data-number="36">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1444.43,1443.61l-445.28-442.59,1.79-2.15,515.45,358.57-.8,1.15c-20.77,29.85-44.37,58.12-70.17,84.02l-.99,.99Zm-431.91-433.26l431.9,429.29c24.96-25.18,47.85-52.58,68.06-81.49l-499.96-347.8Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1364.12,1363.78l-1-.99-363.97-361.77,1.79-2.15,422.48,293.9-.8,1.15c-17.02,24.46-36.37,47.63-57.51,68.86l-.99,1Zm-351.6-353.43l351.58,349.46c20.31-20.51,38.94-42.82,55.4-66.34l-406.99-283.12Z"
            />
            <text
              className="cls-3"
              transform="translate(1436.85 1343.11) rotate(129.52)"
            >
              <tspan x="0" y="0">
                36
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-30" data-number="30">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1265.92,1568.82l-267.05-568.2,2.42-1.41,361.62,513.12-1.15,.81c-29.81,21.02-61.63,39.55-94.57,55.07l-1.27,.6Zm-257.67-554.86l259.02,551.12c31.92-15.13,62.76-33.1,91.73-53.42l-350.75-497.7Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1217.75,1466.33l-218.88-465.71,2.42-1.41,296.39,420.57-1.15,.81c-24.45,17.24-50.53,32.43-77.51,45.14l-1.27,.6Zm-209.51-452.37l210.85,448.63c25.96-12.32,51.07-26.94,74.67-43.49l-285.52-405.14Z"
            />
            <text
              className="cls-3"
              transform="translate(1293.19 1471.09) rotate(146.78)"
            >
              <tspan x="0" y="0">
                30
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-23" data-number="23">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1055.35,1625.42l-.13-1.4-56.49-623.87,2.76-.49,164.35,606-1.36,.37c-35,9.51-71.25,15.99-107.74,19.26l-1.4,.13Zm-52.37-609.53l54.91,606.47c35.38-3.25,70.52-9.54,104.5-18.68l-159.41-587.79Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1045.15,1512.64l-.13-1.4-46.27-511.09,2.76-.49,134.7,496.7-1.36,.37c-28.69,7.79-58.4,13.11-88.3,15.79l-1.4,.13Zm-42.15-496.74l44.7,493.69c28.8-2.66,57.4-7.78,85.06-15.21l-129.76-478.48Z"
            />
            <text
              className="cls-3"
              transform="translate(1115.15 1545.14) rotate(172.4)"
            >
              <tspan x="0" y="0">
                23
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-5" data-number="5">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M948.74,1625.62l-1.4-.12c-36.28-3.07-72.55-9.34-107.81-18.66l-1.36-.36,.36-1.36,160.25-605.46,1.04,.27,1.72,.2-52.8,625.48Zm-107.14-21.13c34.22,8.96,69.39,15.04,104.57,18.1l51.21-606.67-155.78,588.57Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M958.27,1512.8l-1.4-.12c-29.74-2.51-59.47-7.66-88.37-15.29l-1.36-.36,.36-1.36,131.28-496,1.14,.3,1.62,.17-43.27,512.66Zm-87.69-17.77c27.86,7.28,56.49,12.23,85.13,14.73l41.69-493.85-126.81,479.11Z"
            />
            <text
              className="cls-3"
              transform="translate(911.91 1548.79) rotate(-170.44)"
            >
              <tspan x="0" y="0">
                5
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-16" data-number="16">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M737.81,1570.42l-1.27-.59c-33.21-15.32-65.16-33.61-94.98-54.37l-1.15-.8,.8-1.15,361.17-519.14-.87,6.07-.09,.2-263.6,569.79Zm-93.5-56.47c28.97,20.07,59.96,37.81,92.13,52.74l255.69-552.7-347.82,499.96Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M785.36,1467.64l-1.27-.59c-27.22-12.56-53.41-27.55-77.85-44.57l-1.15-.8,.8-1.15,296.39-426.03-.76,5.91-.09,.2-216.05,467.02Zm-76.37-46.66c23.6,16.33,48.81,30.76,75,42.93l208.14-449.91-283.14,406.98Z"
            />
            <text
              className="cls-3"
              transform="translate(738.79 1491.19) rotate(-148.5)"
            >
              <tspan x="0" y="0">
                16
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-1" data-number="1">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M558.54,1446.32l-1-.99c-25.88-25.83-49.6-53.99-70.52-83.7l-.81-1.15,1.15-.81,512.42-361.13,3.25,.56-444.5,447.22Zm-68.4-85.16c20.35,28.77,43.35,56.08,68.4,81.18l429.33-431.96-497.73,350.78Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M638.38,1366l-1-.99c-21.21-21.17-40.65-44.25-57.8-68.6l-.81-1.15,1.15-.81,419.87-295.9,3.23,.58-1.89,1.9-362.76,364.98Zm-55.68-70.07c16.58,23.42,35.3,45.64,55.68,66.09l349.5-351.63-405.18,285.55Z"
            />
            <text
              className="cls-3"
              transform="translate(577.79 1361.67) rotate(-131.47)"
            >
              <tspan x="0" y="0">
                1
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-14" data-number="14">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M432.27,1270.04l-.6-1.27c-15.62-33.17-28.34-67.73-37.79-102.7l-.37-1.36,1.36-.37,604.58-163.97,.97,2.63-568.14,267.03Zm-35.31-103.35c9.25,33.9,21.58,67.4,36.66,99.61l551.06-259.01-587.72,159.4Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M534.76,1221.87l-.6-1.27c-12.8-27.2-23.22-55.52-30.98-84.17l-.37-1.36,496.63-134.7,.97,2.63-465.66,218.87Zm-28.49-84.82c7.55,27.59,17.58,54.85,29.84,81.08l448.58-210.84-478.42,129.76Z"
            />
            <text
              className="cls-3"
              transform="translate(483.63 1208.05) rotate(-109.65)"
            >
              <tspan x="0" y="0">
                14
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-9" data-number="9">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M374.73,1059.72l-.13-1.4c-3.25-36.21-3.33-73.02-.24-109.42l.12-1.4,1.4,.12,625.69,52.83-.55,2.57-1.03,.1-625.26,56.61Zm2.32-109.19c-2.92,35.31-2.85,71.01,.23,106.14l606.51-54.91-606.73-51.23Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M487.51,1049.51l-.13-1.4c-2.66-29.68-2.72-59.86-.19-89.69l.12-1.4,1.4,.12,512.81,43.3-.47,2.57-1.07,.11-512.48,46.39Zm2.37-89.45c-2.36,28.74-2.3,57.8,.18,86.4l493.75-44.7-493.93-41.7Z"
            />
            <text
              className="cls-3"
              transform="translate(444.61 1009.51) rotate(-89.3)"
            >
              <tspan x="0" y="0">
                9
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-18" data-number="18">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.5,1003.07l-606.8-160.63,.36-1.36c9.3-35.31,21.75-69.96,36.99-102.98l.59-1.28,569.81,263.61-.95,2.63Zm-603.37-162.63l588.56,155.8-552.68-255.68c-14.71,32.07-26.78,65.65-35.88,99.88Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.51,1003.07l-497.35-131.65,.36-1.36c7.62-28.92,17.82-57.32,30.32-84.4l.59-1.28,1.28,.59,465.76,215.47-.95,2.63Zm-493.91-133.65l479.11,126.82-449.9-208.13c-11.97,26.12-21.79,53.46-29.21,81.31Z"
            />
            <text
              className="cls-3"
              transform="translate(471.83 828.53) rotate(-71.06)"
            >
              <tspan x="0" y="0">
                18
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-7" data-number="7">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.06,1002.86L483.62,644.27l.8-1.15c20.9-30.01,44.5-58.27,70.16-83.99l.99-.99,445.28,442.59-1.79,2.15Zm-511.53-359.3l499.95,347.82-431.9-429.29c-24.83,25.01-47.72,52.41-68.05,81.47Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M999.07,1002.86l-422.47-293.92,.8-1.15c17.13-24.59,36.48-47.76,57.51-68.84l.99-.99,364.96,362.76-1.79,2.15Zm-418.56-294.62l406.98,283.14-351.58-349.45c-20.2,20.37-38.83,42.67-55.4,66.32Z"
            />
            <text
              className="cls-3"
              transform="translate(569.88 649.6) rotate(-50.12)"
            >
              <tspan x="0" y="0">
                7
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-12" data-number="12">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M998.71,1002.52L637.09,489.38l1.15-.81c29.85-21.02,61.66-39.54,94.56-55.05l1.27-.6,267.06,568.19-2.42,1.41ZM641.01,490.06l350.75,497.71L732.73,436.67c-31.88,15.11-62.73,33.07-91.72,53.4Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M998.72,1002.52l-296.4-420.58,1.15-.81c24.48-17.24,50.55-32.42,77.51-45.12l1.27-.6,218.89,465.7-2.42,1.41Zm-292.48-419.9l285.53,405.15-210.86-448.62c-25.93,12.31-51.04,26.92-74.67,43.46Z"
            />
            <text
              className="cls-3"
              transform="translate(706.04 529.93) rotate(-29.91)"
            >
              <tspan x="0" y="0">
                12
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-3" data-number="3">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M998.78,1000.39l-164.37-606.02,1.36-.37c35.19-9.52,71.44-16,107.75-19.25l1.4-.12,.13,1.4,56.49,623.87-2.76,.49Zm-160.92-604.04l159.43,587.81-54.92-606.48c-35.21,3.23-70.36,9.51-104.51,18.67Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M998.79,1000.39l-134.72-496.71,1.36-.37c28.81-7.8,58.53-13.11,88.32-15.78l1.4-.13,.13,1.4,46.28,511.09-2.76,.49Zm-131.27-494.73l129.78,478.5-44.7-493.69c-28.69,2.65-57.3,7.76-85.08,15.2Z"
            />
            <text
              className="cls-3"
              transform="translate(894.17 453.8) rotate(-10.91)"
            >
              <tspan x="0" y="0">
                3
              </tspan>
            </text>
          </g>
          <g className="slices" id="slice-34" data-number="34">
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1625.52,1054.25l-625.5-52.82v-2.8s625.26-56.6,625.26-56.6l.13,1.4c3.24,36.04,3.32,72.85,.23,109.42l-.12,1.4Zm-609.26-54.27l606.7,51.23c2.91-35.47,2.84-71.16-.22-106.13l-606.47,54.89Z"
            />
            <path
              style={{
                fill: props.whiteSliceColor,
              }}
              className="cls-10"
              d="M1512.7,1044.72l-512.67-43.29v-2.8s512.47-46.39,512.47-46.39l.13,1.4c2.66,29.53,2.72,59.71,.19,89.68l-.12,1.4Zm-496.43-44.74l493.87,41.71c2.36-28.88,2.3-57.93-.18-86.39l-493.69,44.69Z"
            />
            <text
              className="cls-3"
              transform="translate(1556.08 980.64) rotate(90)"
            >
              <tspan x="0" y="0">
                34
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g id="zeros-circle" className="hide">
        <path d="M999.62,1003.08L999.8,1001.96L999.29,1000.4L999.66,1000.25L1000.1,1000.31L1007.1,1001.51L1000.17,1003.06L999.81,1001.98L999.62,1003.08Z" />
        <path d="M999.65,1003.08L999.82,1001.92L999.22,1000.43L999.61,1000.25L1000.09,1000.3L1006.19,1001.28L1000.27,1003.04L999.83,1001.94L999.65,1003.08Z" />
        <path d="M1000.16,1003.12L1000.15,1001.99L999.37,1000.54L999.71,1000.33L1000.16,1000.31L1007.27,1000.31L1000.69,1003.02L1000.16,1002.01L1000.16,1003.12Z" />
        <path d="M1000.17,1003.12L1000.16,1001.95L999.31,1000.59L999.68,1000.33L1000.17,1000.31L1006.12,1000.31L1000.79,1002.97L1000.17,1001.96L1000.17,1003.12Z" />
        <path d="M1001.5,1000.36L998.74,999.88L1051.55,374.39L1052.95,374.51C1089.26,377.58 1125.53,383.86 1160.76,393.18L1162.12,393.54L1161.76,394.9L1001.5,1000.35L1001.5,1000.36ZM1054.11,377.44L1002.89,984.12L1158.68,395.55C1124.49,386.59 1089.32,380.5 1054.11,377.44Z" />
        <path d="M1001.5,1000.36L998.74,999.88L1042.02,487.22L1043.42,487.34C1073.18,489.86 1102.91,495.01 1131.79,502.64L1133.15,503L1132.79,504.36L1001.5,1000.36ZM1044.58,490.26L1002.89,984.12L1129.71,505C1101.87,497.72 1073.24,492.77 1044.58,490.26Z" />
        <g transform="matrix(0.979575,0.201078,-0.201078,0.979575,1084.44,457.686)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1001.02,1002.49L998.59,1001.1L1261.63,431.03L1262.91,431.62C1296.06,446.99 1328,465.3 1357.85,486.04L1359,486.84L1358.2,487.99L1001.02,1002.48L1001.02,1002.49ZM1263,434.77L1007.87,987.7L1355.09,487.56C1326.09,467.51 1295.12,449.76 1263,434.78L1263,434.77Z" />
        <path d="M1001.02,1002.48L998.59,1001.09L1214.18,533.85L1215.46,534.44C1242.64,547.05 1268.82,562.06 1293.27,579.04L1294.42,579.84L1293.62,580.99L1001.01,1002.47L1001.02,1002.48ZM1215.56,537.58L1007.87,987.68L1290.52,580.55C1266.92,564.25 1241.71,549.8 1215.56,537.58Z" />
        <g transform="matrix(0.879399,0.476085,-0.476085,0.879399,1262.42,512.894)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M999.44,1000.35L999.15,1001L1441.46,555.41L1442.46,556.4C1468.32,582.2 1492.05,610.36 1512.98,640.08L1513.79,641.23L1512.64,642.04L999.45,1000.35L999.44,1000.35ZM1441.46,559.39L1012.18,991.29L1509.86,640.56C1489.49,611.77 1466.49,584.48 1441.46,559.4L1441.46,559.39Z" />
        <path d="M999.8,1001.96L999,1000.91L1361.62,635.73L1362.62,636.72C1383.83,657.89 1403.28,680.96 1420.42,705.3L1421.23,706.45L1420.08,707.26L999.8,1001.96ZM1361.63,639.71L1012.18,991.29L1417.31,705.78C1400.73,682.37 1382.01,660.16 1361.63,639.71Z" />
        <g transform="matrix(0.632705,0.774393,-0.774393,0.632705,1413.2,631.22)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1000.51,1001.36L999.54,998.73L1567.72,731.67L1568.32,732.94C1583.91,766.01 1596.63,800.57 1606.14,835.65L1606.51,837.01L1605.15,837.38L1000.5,1001.36L1000.51,1001.36ZM1566.38,735.41L1015.27,994.44L1603.06,835.03C1593.76,801.02 1581.42,767.52 1566.37,735.41L1566.38,735.41Z" />
        <path d="M1000.51,1001.35L999.54,998.72L1465.24,779.83L1465.84,781.1C1478.62,808.21 1489.04,836.53 1496.84,865.28L1497.21,866.64L1000.52,1001.35L1000.51,1001.35ZM1463.89,783.57L1015.27,994.43L1493.75,864.66C1486.17,836.98 1476.13,809.71 1463.89,783.57Z" />
        <g transform="matrix(0.359345,0.933205,-0.933205,0.359345,1518.97,797.21)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1569.36,1264.87L999.55,1001.28L1000.5,998.65L1607.29,1159.27L1606.93,1160.63C1597.59,1196.04 1585.15,1230.68 1569.95,1263.6L1569.36,1264.88L1569.36,1264.87ZM1015.3,1005.47L1567.98,1261.14C1582.65,1229.17 1594.71,1195.58 1603.85,1161.26L1015.3,1005.47Z" />
        <path d="M1466.58,1217.32L999.55,1001.27L1000.5,998.64L1497.84,1130.29L1497.48,1131.65C1489.83,1160.66 1479.63,1189.05 1467.17,1216.05L1466.58,1217.33L1466.58,1217.32ZM1015.31,1005.47L1465.21,1213.59C1477.14,1187.55 1486.96,1160.21 1494.41,1132.29L1015.32,1005.47L1015.31,1005.47Z" />
        <g transform="matrix(-0.319456,0.947601,-0.947601,-0.319456,1528.06,1177.69)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1444.43,1443.58L999.15,1000.99L1000.94,998.84L1516.39,1357.41L1515.59,1358.56C1494.82,1388.41 1471.22,1416.68 1445.42,1442.58L1444.43,1443.57L1444.43,1443.58ZM1012.52,1010.32L1444.42,1439.61C1469.38,1414.43 1492.27,1387.03 1512.48,1358.12L1012.52,1010.32Z" />
        <path d="M1364.12,1363.75L1363.12,1362.76L999.15,1000.99L1000.94,998.84L1423.42,1292.74L1422.62,1293.89C1405.6,1318.35 1386.25,1341.52 1365.11,1362.75L1364.12,1363.75ZM1012.52,1010.32L1364.1,1359.78C1384.41,1339.27 1403.04,1316.96 1419.5,1293.44L1012.51,1010.32L1012.52,1010.32Z" />
        <g transform="matrix(-0.636348,0.771403,-0.771403,-0.636348,1433.85,1347.08)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1265.92,1568.8L998.87,1000.6L1001.29,999.19L1362.91,1512.31L1361.76,1513.12C1331.95,1534.14 1300.13,1552.67 1267.19,1568.19L1265.92,1568.79L1265.92,1568.8ZM1008.25,1013.94L1267.27,1565.06C1299.19,1549.93 1330.03,1531.96 1359,1511.64L1008.25,1013.94Z" />
        <path d="M1217.75,1466.31L998.87,1000.6L1001.29,999.19L1297.68,1419.76L1296.53,1420.57C1272.08,1437.81 1246,1453 1219.02,1465.71L1217.75,1466.31ZM1008.24,1013.94L1219.09,1462.57C1245.05,1450.25 1270.16,1435.63 1293.76,1419.08L1008.24,1013.94Z" />
        <g transform="matrix(-0.836573,0.547855,-0.547855,-0.836573,1288.19,1475.06)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1055.35,1625.39L1055.22,1623.99L998.73,1000.12L1001.49,999.63L1165.84,1605.63L1164.48,1606C1129.48,1615.51 1093.23,1621.99 1056.74,1625.26L1055.34,1625.39L1055.35,1625.39ZM1002.98,1015.86L1057.89,1622.33C1093.27,1619.08 1128.41,1612.79 1162.39,1603.65L1002.98,1015.86Z" />
        <path d="M1045.15,1512.61L1045.02,1511.21L998.75,1000.12L1001.51,999.63L1136.21,1496.33L1134.85,1496.7C1106.16,1504.49 1076.45,1509.81 1046.55,1512.49L1045.15,1512.62L1045.15,1512.61ZM1003,1015.87L1047.7,1509.56C1076.5,1506.9 1105.1,1501.78 1132.76,1494.35L1003,1015.87Z" />
        <g transform="matrix(-0.991216,0.132256,-0.132256,-0.991216,1109.15,1549.35)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M948.74,1625.6L947.34,1625.48C911.06,1622.41 874.79,1616.14 839.53,1606.82L838.17,1606.46L838.53,1605.1L998.78,999.64L999.82,999.91L1001.54,1000.11L948.74,1625.59L948.74,1625.6ZM841.6,1604.47C875.82,1613.43 910.99,1619.51 946.17,1622.57L997.38,1015.9L841.6,1604.47Z" />
        <path d="M958.27,1512.77L956.87,1512.65C927.13,1510.14 897.4,1504.99 868.5,1497.36L867.14,1497L867.5,1495.64L998.78,999.64L999.92,999.94L1001.54,1000.11L958.27,1512.77ZM870.58,1495C898.44,1502.28 927.07,1507.23 955.71,1509.73L997.4,1015.88L870.59,1494.99L870.58,1495Z" />
        <g transform="matrix(-0.986112,-0.16608,0.16608,-0.986112,917.91,1553.32)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M737.81,1570.39L736.54,1569.8C703.33,1554.48 671.38,1536.19 641.56,1515.43L640.41,1514.63L641.21,1513.48L1002.38,994.34L1001.51,1000.41L1001.42,1000.61L737.82,1570.4L737.81,1570.39ZM644.31,1513.92C673.28,1533.99 704.27,1551.73 736.44,1566.66L992.13,1013.96L644.31,1513.92Z" />
        <path d="M785.36,1467.62L784.09,1467.03C756.87,1454.47 730.68,1439.48 706.24,1422.46L705.09,1421.66L705.89,1420.51L1002.28,994.48L1001.52,1000.39L1001.43,1000.59L785.38,1467.61L785.36,1467.62ZM708.99,1420.96C732.59,1437.29 757.8,1451.72 783.99,1463.89L992.13,1013.98L708.99,1420.96Z" />
        <g transform="matrix(-0.85264,-0.522499,0.522499,-0.85264,738.79,1491.16)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M558.54,1446.3L557.54,1445.31C531.66,1419.48 507.94,1391.32 487.02,1361.61L486.21,1360.46L487.36,1359.65L999.78,998.52L1003.03,999.08L558.53,1446.3L558.54,1446.3ZM490.14,1361.14C510.49,1389.91 533.49,1417.22 558.54,1442.32L987.87,1010.36L490.14,1361.14Z" />
        <path d="M638.38,1365.97L637.38,1364.98C616.17,1343.81 596.73,1320.73 579.58,1296.38L578.77,1295.23L579.92,1294.42L999.79,998.52L1003.02,999.1L1001.13,1001L638.37,1365.98L638.38,1365.97ZM582.7,1295.9C599.28,1319.32 618,1341.54 638.38,1361.99L987.88,1010.36L582.7,1295.91L582.7,1295.9Z" />
        <g transform="matrix(-0.662228,-0.749303,0.749303,-0.662228,583.79,1367.64)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M432.27,1270.01L431.67,1268.74C416.05,1235.57 403.33,1201.01 393.88,1166.04L393.51,1164.68L394.87,1164.31L999.45,1000.34L1000.42,1002.97L432.28,1270L432.27,1270.01ZM396.96,1166.66C406.21,1200.56 418.54,1234.06 433.62,1266.27L984.68,1007.26L396.96,1166.66Z" />
        <path d="M534.76,1221.84L534.16,1220.57C521.36,1193.37 510.94,1165.05 503.18,1136.4L502.81,1135.04L999.44,1000.34L1000.41,1002.97L534.75,1221.84L534.76,1221.84ZM506.27,1137.02C513.82,1164.61 523.85,1191.87 536.11,1218.1L984.69,1007.26L506.27,1137.02Z" />
        <g transform="matrix(-0.336274,-0.941764,0.941764,-0.336274,489.758,1203.02)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M374.73,1059.7L374.6,1058.3C371.35,1022.09 371.27,985.28 374.36,948.88L374.48,947.48L375.88,947.6L1001.57,1000.43L1001.02,1003L999.99,1003.1L374.73,1059.71L374.73,1059.7ZM377.05,950.51C374.13,985.82 374.2,1021.52 377.28,1056.65L983.79,1001.74L377.06,950.51L377.05,950.51Z" />
        <path d="M487.51,1049.49L487.38,1048.09C484.72,1018.41 484.66,988.23 487.19,958.4L487.31,957L488.71,957.12L1001.52,1000.42L1001.05,1002.99L999.98,1003.1L487.5,1049.49L487.51,1049.49ZM489.88,960.04C487.52,988.78 487.58,1017.84 490.06,1046.44L983.81,1001.74L489.88,960.04Z" />
        <g transform="matrix(0.012217,-0.999925,0.999925,0.012217,445.61,1013.7)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M999.5,1003.04L392.7,842.41L393.06,841.05C402.36,805.74 414.81,771.09 430.05,738.07L430.64,736.79L1000.45,1000.4L999.5,1003.03L999.5,1003.04ZM396.13,840.41L984.69,996.21L432.01,740.53C417.3,772.6 405.23,806.18 396.13,840.41Z" />
        <path d="M999.51,1003.04L502.16,871.39L502.52,870.03C510.14,841.11 520.34,812.71 532.84,785.63L533.43,784.35L534.71,784.94L1000.47,1000.41L999.52,1003.04L999.51,1003.04ZM505.6,869.39L984.71,996.21L534.81,788.08C522.84,814.2 513.02,841.54 505.6,869.39Z" />
        <g transform="matrix(0.324578,-0.945859,0.945859,0.324578,475.449,824.5)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M999.06,1002.84L483.62,644.24L484.42,643.09C505.32,613.08 528.92,584.82 554.58,559.1L555.57,558.11L1000.85,1000.7L999.06,1002.85L999.06,1002.84ZM487.53,643.54L987.48,991.36L555.58,562.07C530.75,587.08 507.86,614.48 487.53,643.54Z" />
        <path d="M999.07,1002.84L576.6,708.92L577.4,707.77C594.53,683.18 613.88,660.01 634.91,638.93L635.9,637.94L1000.86,1000.7L999.07,1002.85L999.07,1002.84ZM580.51,708.22L987.49,991.36L635.91,641.91C615.71,662.28 597.08,684.58 580.51,708.23L580.51,708.22Z" />
        <g transform="matrix(0.641182,-0.767389,0.767389,0.641182,563.88,655.58)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M998.71,1002.49L637.09,489.36L638.24,488.55C668.09,467.53 699.9,449.01 732.8,433.5L734.07,432.9L1001.13,1001.09L998.71,1002.5L998.71,1002.49ZM641.01,490.04L991.76,987.75L732.73,436.64C700.85,451.75 670,469.71 641.01,490.04Z" />
        <path d="M998.72,1002.49L702.32,581.91L703.47,581.1C727.95,563.86 754.02,548.68 780.98,535.98L782.25,535.38L1001.14,1001.08L998.72,1002.49ZM706.24,582.59L991.77,987.74L780.91,539.12C754.98,551.43 729.87,566.04 706.24,582.58L706.24,582.59Z" />
        <g transform="matrix(0.86681,-0.498639,0.498639,0.86681,710.04,529.9)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M998.78,1000.37L834.41,394.35L835.77,393.98C870.96,384.46 907.21,377.98 943.52,374.73L944.92,374.61L945.05,376.01L1001.54,999.88L998.78,1000.37ZM837.86,396.33L997.29,984.14L942.37,377.66C907.16,380.89 872.01,387.17 837.86,396.33Z" />
        <path d="M998.79,1000.37L864.07,503.66L865.43,503.29C894.24,495.49 923.96,490.18 953.75,487.51L955.15,487.38L955.28,488.78L1001.56,999.87L998.8,1000.36L998.79,1000.37ZM867.52,505.64L997.3,984.14L952.6,490.45C923.91,493.1 895.3,498.21 867.52,505.65L867.52,505.64Z" />
        <g transform="matrix(0.981926,-0.189267,0.189267,0.981926,891.17,456.77)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1625.52,1054.22L1000.02,1001.4L1000.02,998.6L1625.28,942L1625.41,943.4C1628.65,979.44 1628.73,1016.25 1625.64,1052.82L1625.52,1054.22ZM1016.26,999.95L1622.96,1051.18C1625.87,1015.71 1625.8,980.02 1622.74,945.05L1016.27,999.94L1016.26,999.95Z" />
        <path d="M1512.7,1044.69L1000.03,1001.4L1000.03,998.6L1512.5,952.21L1512.63,953.61C1515.29,983.14 1515.35,1013.32 1512.82,1043.29L1512.7,1044.69ZM1016.27,999.95L1510.14,1041.66C1512.5,1012.78 1512.44,983.73 1509.96,955.27L1016.27,999.96L1016.27,999.95Z" />
        <g transform="matrix(-3.82857e-16,1,-1,-3.82857e-16,1557.6,986.5)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M998.74,1000.13L941.94,374.99L943.34,374.86C979.63,371.57 1016.44,371.45 1052.76,374.5L1054.16,374.62L1054.04,376.02L1001.54,1000.12L998.74,1000.12L998.74,1000.13ZM945,377.55L1000.09,983.89L1051.13,377.2C1015.9,374.32 980.21,374.44 945,377.55Z" />
        <path d="M998.74,1000.13L952.19,487.75L953.59,487.62C983.33,484.93 1013.51,484.83 1043.27,487.32L1044.67,487.44L1044.55,488.84L1001.54,1000.12L998.74,1000.12L998.74,1000.13ZM955.24,490.31L1000.09,983.89L1041.64,490.02C1012.95,487.7 983.91,487.79 955.25,490.31L955.24,490.31Z" />
        <g transform="matrix(1,0,0,1,986.5,448.944)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1001.44,1002.3L998.81,1001.35L1158.68,394.22L1160.04,394.58C1195.35,403.95 1229.99,416.42 1263,431.66L1264.27,432.25L1263.68,433.53L1001.43,1002.3L1001.44,1002.3ZM1160.68,397.66L1005.61,986.54L1260.54,433.63C1228.49,418.93 1194.91,406.83 1160.68,397.67L1160.68,397.66Z" />
        <path d="M1001.44,1002.29L998.81,1001.34L1129.85,503.72L1131.21,504.08C1160.17,511.77 1188.56,521.99 1215.59,534.47L1216.86,535.06L1216.27,536.34L1001.44,1002.29ZM1131.84,507.16L1005.61,986.52L1213.13,536.43C1187.05,524.48 1159.72,514.64 1131.84,507.16Z" />
        <g transform="matrix(0.941999,0.335616,-0.335616,0.941999,1174.43,473.332)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1001.16,1002.7L999.01,1000.91L1357.4,485.43L1358.55,486.24C1388.51,507.15 1416.77,530.75 1442.55,556.38L1443.55,557.37L1442.56,558.37L1001.16,1002.71L1001.16,1002.7ZM1358.1,489.34L1010.48,989.32L1439.57,557.37C1414.5,532.56 1387.11,509.69 1358.09,489.34L1358.1,489.34Z" />
        <path d="M1001.16,1002.7L999.01,1000.91L1292.76,578.41L1293.91,579.22C1318.48,596.37 1341.64,615.72 1362.76,636.71L1363.76,637.7L1362.77,638.7L1001.17,1002.72L1001.16,1002.7ZM1293.46,582.32L1010.49,989.32L1359.78,637.7C1339.38,617.53 1317.08,598.91 1293.46,582.32Z" />
        <g transform="matrix(0.775606,0.631217,-0.631217,0.775606,1342.55,567.62)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1000.74,1001.27L999.33,998.85C999.33,998.85 1510.33,640.1 1512.13,638.88C1526.29,657.83 1552.86,699.86 1568.32,732.75L1568.92,734.02L1000.74,1001.27ZM1511.92,642.47L1014.08,991.89L1565.18,732.67C1550.11,700.8 1532.32,671.48 1511.92,642.47Z" />
        <path d="M1000.74,1001.27L999.33,998.85L1419.85,702.3L1420.66,703.45C1437.96,727.92 1453.15,754 1465.83,780.96L1466.43,782.23L1000.74,1001.28L1000.74,1001.27ZM1419.18,706.21L1014.07,991.89L1462.68,780.88C1450.4,754.94 1435.77,729.84 1419.17,706.21L1419.18,706.21Z" />
        <g transform="matrix(0.516832,0.856087,-0.856087,0.516832,1475.29,711.6)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1606.76,1161.82L1605.4,1161.46L999.78,1001.36L1000.26,998.6L1625.74,1051.23L1625.62,1052.63C1622.58,1089.12 1616.35,1125.41 1607.11,1160.47L1606.75,1161.83L1606.76,1161.82ZM1016.03,1002.74L1604.76,1158.38C1613.64,1124.35 1619.68,1089.17 1622.71,1053.78L1016.03,1002.74Z" />
        <path d="M1497.27,1132.88L1495.91,1132.52L999.78,1001.36L1000.26,998.6L1512.91,1041.74L1512.79,1043.14C1510.3,1073.03 1505.2,1102.77 1497.62,1131.52L1497.26,1132.88L1497.27,1132.88ZM1016.03,1002.75L1495.27,1129.45C1502.49,1101.73 1507.4,1073.09 1509.88,1044.31L1016.03,1002.76L1016.03,1002.75Z" />
        <g transform="matrix(-0.123601,0.992332,-0.992332,-0.123601,1548.79,1081.85)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1514.81,1359.55L999.33,1001.16L1000.72,998.73L1570.68,1262.18L1570.09,1263.46C1554.83,1296.47 1536.5,1328.41 1515.61,1358.4L1514.81,1359.55ZM1014.12,1008.02L1514.11,1355.64C1534.31,1326.5 1552.08,1295.53 1566.95,1263.55L1014.12,1008.02Z" />
        <path d="M1421.84,1294.9L999.34,1001.15L1000.73,998.72L1467.89,1214.65L1467.3,1215.93C1454.79,1242.98 1439.77,1269.16 1422.64,1293.75L1421.84,1294.9ZM1014.13,1008.01L1421.14,1290.99C1437.57,1267.26 1452.04,1242.05 1464.16,1216.03L1014.13,1008.02L1014.13,1008.01Z" />
        <g transform="matrix(-0.475164,0.879897,-0.879897,-0.475164,1486.67,1264.74)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1360.8,1513.9L1359.99,1512.75L998.99,1000.81L1001.13,999L1446.49,1441.4L1445.5,1442.4C1419.8,1468.28 1391.69,1492.07 1361.95,1513.08L1360.8,1513.89L1360.8,1513.9ZM1010.54,1012.32L1361.47,1509.98C1390.27,1489.53 1417.52,1466.47 1442.51,1441.42L1010.54,1012.31L1010.54,1012.32Z" />
        <path d="M1295.54,1421.35L1294.73,1420.2L998.99,1000.81L1001.13,999L1366.16,1361.6L1365.17,1362.6C1344.09,1383.83 1321.05,1403.32 1296.69,1420.54L1295.54,1421.35ZM1010.54,1012.31L1296.21,1417.43C1319.63,1400.78 1341.81,1382.01 1362.18,1361.62L1010.54,1012.32L1010.54,1012.31Z" />
        <g transform="matrix(-0.74501,0.667053,-0.667053,-0.74501,1366.48,1416.17)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1163.29,1606.26L1162.92,1604.91L998.78,1000.38L1001.41,999.41L1268.66,1567.59L1267.39,1568.19C1234.58,1583.64 1200.01,1596.33 1164.65,1605.9L1163.29,1606.27L1163.29,1606.26ZM1005.7,1015.13L1165.26,1602.81C1199.54,1593.45 1233.05,1581.15 1264.91,1566.24L1005.69,1015.14L1005.7,1015.13Z" />
        <path d="M1133.62,1496.97L1133.25,1495.62L998.78,1000.37L1001.41,999.4L1220.45,1465.09L1219.18,1465.69C1192.28,1478.36 1163.95,1488.75 1134.97,1496.6L1133.61,1496.97L1133.62,1496.97ZM1005.71,1015.13L1135.6,1493.52C1163.5,1485.89 1190.77,1475.88 1216.72,1463.75L1005.71,1015.13Z" />
        <g transform="matrix(-0.964603,0.263705,-0.263705,-0.964603,1205.03,1512.49)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1000.06,1627.7C982.52,1627.7 964.97,1626.97 947.53,1625.51L946.13,1625.39L946.25,1623.99L998.75,999.89L999.64,999.96L1001.55,999.87L1058.35,1625L1056.95,1625.13C1038.09,1626.84 1019.08,1627.7 1000.07,1627.7L1000.06,1627.7ZM949.16,1622.83C984.42,1625.7 1020.1,1625.57 1055.29,1622.46L1000.2,1016.13L949.17,1622.83L949.16,1622.83Z" />
        <path d="M1000.08,1514.47C985.7,1514.47 971.31,1513.87 957.02,1512.68L955.62,1512.56L955.74,1511.16L998.74,999.89L999.63,999.96L1001.54,999.87L1048.1,1512.24L1046.7,1512.37C1031.25,1513.77 1015.67,1514.47 1000.08,1514.47ZM958.65,1509.99C987.35,1512.31 1016.4,1512.21 1045.04,1509.69L1000.19,1016.12L958.65,1509.99Z" />
        <g transform="matrix(-1,7.65714e-16,-7.65714e-16,-1,1013.5,1557.42)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M841.02,1607.33L839.66,1606.97C804.3,1597.66 769.64,1585.21 736.67,1569.95L735.4,1569.36L735.99,1568.09L1001.55,993.62L1001.55,1000.19L1001.5,1000.38L841.02,1607.34L841.02,1607.33ZM739.12,1567.99C771.14,1582.72 804.74,1594.79 839.02,1603.9L994.68,1015.16L739.12,1567.99Z" />
        <path d="M869.97,1497.85L868.61,1497.49C839.62,1489.86 811.22,1479.65 784.19,1467.14L782.92,1466.55L783.51,1465.28L1001.55,993.61L1001.55,1000.18L1001.5,1000.37L869.97,1497.85ZM786.65,1465.18C812.72,1477.15 840.07,1486.98 867.97,1494.41L994.68,1015.15L786.65,1465.18Z" />
        <g transform="matrix(-0.930161,-0.367151,0.367151,-0.930161,824.63,1528.64)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M642.9,1516.31L641.75,1515.5C611.77,1494.57 583.51,1470.96 557.75,1445.34L556.75,1444.35L999.53,998.61L1002.86,998.55L1001.29,1000.8L642.9,1516.3L642.9,1516.31ZM560.72,1444.34C585.77,1469.14 613.17,1492.02 642.2,1512.39L989.86,1012.34L560.73,1444.34L560.72,1444.34Z" />
        <path d="M707.55,1423.32L706.4,1422.51C681.83,1405.36 658.67,1386.01 637.55,1365.01L636.55,1364.02L999.54,998.6L1002.83,998.6L707.55,1423.32ZM640.53,1364.01C660.93,1384.19 683.23,1402.81 706.85,1419.4L989.86,1012.34L640.53,1364.01Z" />
        <g transform="matrix(-0.762668,-0.64679,0.64679,-0.762668,653.41,1433.92)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M487.79,1362.71C481.09,1354.6 447.23,1301.86 431.83,1269.07L431.12,1267.51L999.52,1000.46L1000.93,1002.88C1000.93,1002.88 490.13,1361.07 487.8,1362.71L487.79,1362.71ZM434.87,1268.96C449.88,1300.74 468.02,1329.7 488.47,1358.79L986.18,1009.84L434.87,1268.96Z" />
        <path d="M580.44,1299.41L579.63,1298.26C562.29,1273.7 547.1,1247.63 534.48,1220.76L533.88,1219.49L999.51,1000.46L1000.92,1002.88L580.43,1299.41L580.44,1299.41ZM537.63,1220.84C549.86,1246.69 564.49,1271.8 581.12,1295.5L986.19,1009.85L537.63,1220.84Z" />
        <g transform="matrix(-0.49379,-0.869581,0.869581,-0.49379,526.71,1291.1)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M394.65,1167.57L394.28,1166.21C384.78,1131.12 378.3,1094.87 375.01,1058.49L374.88,1057.09L1001.56,1000.16L1001.56,1002.77L1000.52,1003.06L394.64,1167.56L394.65,1167.57ZM377.94,1059.64C381.2,1094.92 387.49,1130.05 396.63,1164.12L984.34,1004.55L377.94,1059.64Z" />
        <path d="M503.93,1137.9L503.56,1136.54C495.78,1107.77 490.47,1078.07 487.77,1048.25L487.64,1046.85L1001.56,1000.16L1001.56,1002.77L1000.52,1003.06L503.92,1137.89L503.93,1137.9ZM490.7,1049.4C493.37,1078.11 498.49,1106.71 505.91,1134.45L984.36,1004.55L490.7,1049.4Z" />
        <g transform="matrix(-0.154366,-0.988014,0.988014,-0.154366,458.6,1110.93)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1000.04,1003.11L374.55,950.48L374.67,949.08C377.69,912.69 383.92,876.41 393.19,841.24L393.55,839.88L1000.53,1000.36L1000.05,1003.12L1000.04,1003.11ZM377.58,947.91L984.27,998.96L395.54,843.31C386.63,877.45 380.59,912.62 377.58,947.91Z" />
        <path d="M1000.05,1003.11L487.38,959.97L487.5,958.57C489.97,928.76 495.08,899.02 502.68,870.18L503.04,868.82L1000.53,1000.35L1000.05,1003.11ZM490.42,957.41L984.28,998.97L505.03,872.27C497.79,900.08 492.87,928.71 490.41,957.42L490.42,957.41Z" />
        <g transform="matrix(0.172617,-0.984989,0.984989,0.172617,454.062,919.82)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M999.57,1002.98L429.61,739.51L430.2,738.23C445.56,705.04 463.89,673.11 484.68,643.31L485.48,642.16L486.63,642.96L1000.96,1000.55L999.57,1002.98ZM433.34,738.14L986.17,993.7L486.18,646.08C466.08,675.03 448.31,705.99 433.34,738.14Z" />
        <path d="M999.58,1002.98L532.42,787.03L533.01,785.75C545.6,758.55 560.62,732.38 577.67,707.95L578.47,706.8L579.62,707.6L1000.97,1000.54L999.58,1002.97L999.58,1002.98ZM536.16,785.66L986.19,993.69L579.18,710.72C562.83,734.29 548.36,759.5 536.16,785.66Z" />
        <g transform="matrix(0.504075,-0.86366,0.86366,0.504075,507.644,738.13)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M999.17,1002.7L553.8,560.29L554.79,559.29C580.53,533.4 608.63,509.63 638.34,488.63L639.49,487.82L640.3,488.97L1001.31,1000.89L999.17,1002.7ZM557.78,560.28L989.76,989.39L638.82,491.74C610.05,512.17 582.8,535.22 557.78,560.28Z" />
        <path d="M999.18,1002.7L634.15,640.09L635.14,639.09C656.25,617.86 679.28,598.38 703.62,581.18L704.77,580.37L705.58,581.52L1001.32,1000.9L999.18,1002.71L999.18,1002.7ZM638.12,640.08L989.76,989.39L704.08,584.29C680.68,600.92 658.5,619.68 638.11,640.08L638.12,640.08Z" />
        <g transform="matrix(0.766044,-0.642788,0.642788,0.766044,628.3,584.705)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M998.87,1000.6L731.59,432.41L732.86,431.81C765.85,416.31 800.43,403.63 835.62,394.11L836.97,393.74L837.34,395.09L1001.49,999.62L998.86,1000.59L998.87,1000.6ZM735.33,433.76L994.57,984.88L835,397.2C800.89,406.51 767.37,418.8 735.33,433.76Z" />
        <path d="M998.87,1000.6L779.81,534.9L781.08,534.3C808.1,521.61 836.43,511.21 865.31,503.4L866.66,503.03L867.03,504.38L1001.5,999.63L998.87,1000.6ZM783.55,536.25L994.58,984.88L864.69,506.49C836.9,514.09 809.62,524.1 783.55,536.25Z" />
        <g transform="matrix(0.935691,-0.352822,0.352822,0.935691,795.9,482.53)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
        <path d="M1000.27,1001.4L999.77,998.64L1605.66,834.15L1606.03,835.51C1615.49,870.44 1621.97,906.68 1625.29,943.22L1625.42,944.62L1000.27,1001.4ZM1603.69,837.6L1016.01,997.15L1622.37,942.07C1619.07,906.64 1612.79,871.51 1603.69,837.6Z" />
        <path d="M1000.27,1001.4L999.77,998.64L1496.37,863.82L1496.74,865.18C1504.49,893.8 1509.8,923.51 1512.53,953.46L1512.66,954.86L1000.27,1001.4ZM1494.4,867.27L1016.01,997.15L1509.6,952.32C1506.9,923.47 1501.79,894.88 1494.39,867.28L1494.4,867.27Z" />
        <g transform="matrix(0.186867,0.982385,-0.982385,0.186867,1544.51,886.71)">
          <text x="0px" y="0px">
            0
          </text>
        </g>
      </g>
      <path
        id="centre-circle"
        className="cls-11"
        d="M1000.08,856.26c79.33,.04,143.71,64.48,143.66,143.82-.04,79.33-64.48,143.71-143.82,143.66-79.33-.04-143.71-64.48-143.66-143.82,.04-79.33,64.48-143.71,143.82-143.66h0Z"
      />
    </svg>
  );
}
