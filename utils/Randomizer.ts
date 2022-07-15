import { css } from 'twind/css';
import Helper from './Helper.ts'

const logoA = css`
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');

display: flex;
justify-content: center;
padding: 3%;
font-family: 'Montserrat', sans-serif;
font-size: 8vw;
letter-spacing:0.1em;
-webkit-text-fill-color: transparent;
-webkit-text-stroke-width: 0.4vw;
-webkit-text-stroke-color: white;
text-shadow: 
            0.6vw 0.6vw #ff1f8f,
            1.3vw 1.3vw #000000;

`

const logoB = css`
font-size: 8vw;
display: flex;
justify-content: center;
padding: 3%;
color: #fcedd8;
font-family: 'Niconne', cursive;
font-weight: 700;
text-shadow: 0.5vw 0.5vw 0px #eb452b, 
          1vw 1vw 0vw #efa032, 
          1.5vw 1.5vw 0vw #46b59b, 
          2.0vw 2.0vw 0vw #017e7f, 
          2.5vw 2.5vw 0vw #052939, 
          3.0vw 3.0vw 0vw #c11a2b, 
          3.5vw 3.5vw 0vw #c11a2b, 
          4.0vw 4.0vw 0vw #c11a2b, 
          4.5vw 4.5vw 0vw #c11a2b;
`

const logoC = css`
font-size: 8vw;

display: flex;
justify-content: center;

padding: 3%;
color: blue;
`
const logoD = css`
font-size: 8vw;

display: flex;
justify-content: center;
font-family: cursive;
padding: 3%;
color: white;
text-shadow:
  0 0 5px #fff,
  0 0 10px #fff,
  0 0 20px #fff,
  0 0 40px #0ff,
  0 0 80px #0ff,
  0 0 90px #0ff,
  0 0 100px #0ff,
  0 0 150px #0ff;
`

export default class Randomizer {


    private static randInt (maxIndex: number): number{
        return Math.floor(Math.random() * (maxIndex));
    }


    public static logo(): any {
        const styleArray = [logoA, logoB, logoC,logoD]

        const selectedIndex = this.randInt(styleArray.length);

        return styleArray[selectedIndex];
    }

    public static sectionColor(): string {
        const colorArray = ['Orange', 'Slategray', 'Pink', 'Gray', 'Violet', 'DogerBlue', 'Tomato']

        const selectedIndex = this.randInt(colorArray.length);

        return colorArray[selectedIndex];
    }

    public static banner(): string {
        const bannerArray = Helper.getBanner();

        const selectedIndex = this.randInt(bannerArray.length);

        return bannerArray[selectedIndex];
    }

}