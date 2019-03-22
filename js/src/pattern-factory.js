import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import ShuffleTheme from './shuffle-theme';

export default class PatternFactory {
  static backgrounds = [
    {
      color: {
        name: 'Red',
        light: Colors.redA100,
        medium: Colors.red500,
        dark: Colors.red700,
      },
      // diagonal stripes: ////
      pattern: {
        background: 'repeating-linear-gradient(120deg, ' + ColorManipulator.fade(Colors.red500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.red700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.red700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.red500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.red500, 0.3) + ' .75em)',
      }
    },
    {
      color: {
        name: 'Green',
        light: Colors.greenA100,
        medium: Colors.green500,
        dark: Colors.green700,
      },
      // diagonal stripes: \\\\
      pattern: {
        background: 'repeating-linear-gradient(45deg, ' + ColorManipulator.fade(Colors.green500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.green700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.green700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.green500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.green500, 0.3) + ' .75em)',
      }
    },
    {
      color: {
        name: 'Blue',
        light: Colors.blueA100,
        medium: Colors.blue500,
        dark: Colors.blue700,
      },
      // vertical stripes: | | | |
      pattern: {
        background: 'repeating-linear-gradient(90deg, ' + ColorManipulator.fade(Colors.blue500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.blue700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.blue700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.blue500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.blue500, 0.3) + ' .75em)',
      }
    },
    {
      color: {
        name: 'Yellow',
        light: Colors.yellowA100,
        medium: Colors.yellow500,
        dark: Colors.yellow700,
      },
      // diamonds: \♦︎\
      pattern: {
        background: 'repeating-linear-gradient(0deg, ' + ColorManipulator.fade(Colors.yellow500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.yellow700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.yellow700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.yellow500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.yellow500, 0.3) + ' .75em),' +
                    'repeating-linear-gradient(45deg, ' + ColorManipulator.fade(Colors.yellow500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.yellow700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.yellow700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.yellow500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.yellow500, 0.3) + ' .75em)',
      }
    },
    {
      color: {
        name: 'Pink',
        light: Colors.pinkA100,
        medium: Colors.pink500,
        dark: Colors.pink700,
      },
      // horizontal stripes: =
      pattern: {
        background: 'repeating-linear-gradient(0deg, ' + ColorManipulator.fade(Colors.pink500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.pink700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.pink700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.pink500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.pink500, 0.3) + ' .75em)',
      }
    },
    {
      color: {
        name: 'Lime',
        light: Colors.limeA100,
        medium: Colors.lime500,
        dark: Colors.lime700,
      },
      // ellipse: <◉>
      pattern: {
        background: 'repeating-radial-gradient(ellipse farthest-corner, ' +
                    ColorManipulator.fade(Colors.lime500, 0.3) + ', ' +
                    ColorManipulator.fade(Colors.lime500, 0.3) + ' 1%, ' +
                    ColorManipulator.fade(Colors.limeA100, 0.3) + '5%, ' +
                    ColorManipulator.fade(Colors.lime500, 0.3) + ' 10%)',
      }
    },
    {
      color: {
        name: 'Cyan',
        light: Colors.cyanA100,
        medium: Colors.cyan500,
        dark: Colors.cyan700,
      },
      // hatch XXXX
      pattern: {
        background: 'repeating-linear-gradient(45deg, ' + ColorManipulator.fade(Colors.cyanA100, 0.3) + ', ' + ColorManipulator.fade(Colors.cyanA100, 0.3) + ' 5px, ' +
                    ColorManipulator.fade(Colors.cyan500, 0.3) + ' 5px, ' +
                    ColorManipulator.fade(Colors.cyan500, 0.3) + ' 10px), ' +
                    'repeating-linear-gradient(-45deg, ' +
                    ColorManipulator.fade(Colors.cyanA100, 0.3) + ', ' +
                    ColorManipulator.fade(Colors.cyanA100, 0.3) + ' 5px, ' +
                    ColorManipulator.fade(Colors.cyan500, 0.3) + ' 5px, ' +
                    ColorManipulator.fade(Colors.cyan500, 0.3) + ' 10px)',
      }
    },
    {
      color: {
        name: 'Deep Purple',
        light: Colors.deepPurpleA100,
        medium: Colors.deepPurple500,
        dark: Colors.deepPurple700,
      },
      // crosses: +++
      pattern: {
        background: 'repeating-linear-gradient(90deg, ' + ColorManipulator.fade(Colors.deepPurple500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.deepPurple700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.deepPurple700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.deepPurple500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.deepPurple500, 0.3) + ' .75em),' +
                    'repeating-linear-gradient(0deg, ' + ColorManipulator.fade(Colors.deepPurple500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.deepPurple700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.deepPurple700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.deepPurple500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.deepPurple500, 0.3) + ' .75em)',
      }
    },
    {
      color: {
        name: 'Light Green',
        light: Colors.lightGreenA100,
        medium: Colors.lightGreen500,
        dark: Colors.lightGreen700,
      },
      // dots: ...
      pattern: {
        background: 'radial-gradient(' + ColorManipulator.fade(Colors.lightGreen500, 0.3) + ' 15%, transparent 16%) 0 0,' +
                    'radial-gradient(' + ColorManipulator.fade(Colors.lightGreen500, 0.3) + ' 15%, transparent 16%) 8px 8px,' +
                    'radial-gradient(' + ColorManipulator.fade(Colors.lightGreenA100, 0.3) + ' 15%, transparent 20%) 0 1px,' +
                    'radial-gradient(' + ColorManipulator.fade(Colors.lightGreenA100, 0.3) + ' 15%, transparent 20%) 8px 9px',
        backgroundColor: ColorManipulator.fade(Colors.lightGreenA100, 0.3) + ' !important',
        backgroundSize: '16px 16px',
      }
    },
    {
      color: {
        name: 'Indigo',
        light: Colors.indigoA100,
        medium: Colors.indigo500,
        dark: Colors.indigo700,
      },
      // zig-zag ^v^v
      pattern: {
        background: 'linear-gradient(135deg, ' + ColorManipulator.fade(Colors.indigo500, 0.25) + ', ' + ColorManipulator.fade(Colors.indigoA100, 0.25) + ' 25%) -50px 0,' +
                    'linear-gradient(225deg, ' + ColorManipulator.fade(Colors.indigo500, 0.25) + ', ' + ColorManipulator.fade(Colors.indigoA100, 0.25) + ' 25%) -50px 0,' +
                    'linear-gradient(315deg, ' + ColorManipulator.fade(Colors.indigo500, 0.25) + ', ' + ColorManipulator.fade(Colors.indigoA100, 0.25) + ' 25%),' +
                    'linear-gradient(45deg, ' + ColorManipulator.fade(Colors.indigo500, 0.25) + ', ' + ColorManipulator.fade(Colors.indigoA100, 0.25) + ' 25%)',
        backgroundSize: '20px 15px',
      }
    },
    {
      color: {
        name: 'Amber',
        light: Colors.amberA100,
        medium: Colors.amber500,
        dark: Colors.amber700,
      },
      // diamonds: /♦︎/
      pattern: {
        background: 'repeating-linear-gradient(0deg, ' + ColorManipulator.fade(Colors.amber500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.amber700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.amber700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.amber500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.amber500, 0.3) + ' .75em),' +
                    'repeating-linear-gradient(120deg, ' + ColorManipulator.fade(Colors.amber500, 0.3) + ' 0, ' +
                    ColorManipulator.fade(Colors.amber700, 0.3) + ' 1px, ' +
                    ColorManipulator.fade(Colors.amber700, 0.3) + ' .25em, ' +
                    ColorManipulator.fade(Colors.amber500, 0.3) + ' calc(.25em + 1px), ' +
                    ColorManipulator.fade(Colors.amber500, 0.3) + ' .75em)',
      }
    },
    {
      color: {
        name: 'Purple',
        light: Colors.purpleA100,
        medium: Colors.purple500,
        dark: Colors.purple700,
      },
      // half rombes ▼
      pattern: {
        background: 'linear-gradient(115deg, transparent 75%, ' + ColorManipulator.fade(Colors.purpleA100, 0.3) +' 75%) 0 0,' +
                    'linear-gradient(245deg, transparent 75%, ' + ColorManipulator.fade(Colors.purpleA100, 0.3) +' 75%) 0 0,' +
                    'linear-gradient(115deg, transparent 75%, ' + ColorManipulator.fade(Colors.purpleA100, 0.3) +' 75%) 7px -15px,' +
                    'linear-gradient(245deg, transparent 75%, ' + ColorManipulator.fade(Colors.purpleA100, 0.3) +' 75%) 7px -15px,' +
                    Colors.purple100,
        backgroundSize: '15px 30px'
      }
    },
    {
      color: {
        name: 'Light Blue',
        light: Colors.lightBlueA100,
        medium: Colors.lightBlue500,
        dark: Colors.lightBlue700,
      },
      // zig-zag: ⦚⦚
      pattern: {
        background: 'linear-gradient(63deg, ' + ColorManipulator.fade(Colors.lightBlue500, 0.25) + ' 23%, transparent 23%) 7px 0,' +
                    'linear-gradient(63deg, transparent 74%, ' + ColorManipulator.fade(Colors.lightBlue500, 0.25) + ' 78%),' +
                    'linear-gradient(63deg, transparent 34%, ' + ColorManipulator.fade(Colors.lightBlue500, 0.25) + ' 38%, ' +
                    ColorManipulator.fade(Colors.lightBlue500, 0.25) + ' 58%, transparent 62%),' + Colors.lightBlueA100,
        backgroundSize: '16px 48px',
      }
    },
    {
      color: {
        name: 'Orange',
        light: Colors.orangeA100,
        medium: Colors.orange500,
        dark: Colors.orange700,
      },
      // loops: ➿
      pattern: {
        background: 'radial-gradient(circle at 0% 50%, ' + ColorManipulator.fade(Colors.orange500, 0.3) +' 9px, ' +
                    ColorManipulator.fade(Colors.orange700, 0.6) + ' 10px, ' + ColorManipulator.fade(Colors.orange500, 0.3) +' 11px) 0px 10px,' +
                    'radial-gradient(at 100% 100%, ' + ColorManipulator.fade(Colors.orange500, 0.3) +' 9px, ' +
                    ColorManipulator.fade(Colors.orange700, 0.6) + ' 10px, ' + ColorManipulator.fade(Colors.orange500, 0.3) +' 11px),' +
                    ColorManipulator.fade(Colors.orangeA100, 0.3),
        backgroundSize: '20px 20px'
      }
    },
    {
      color: {
        name: 'Teal',
        light: Colors.tealA100,
        medium: Colors.teal500,
        dark: Colors.teal700,
      },
      //arrows: ⬋
      pattern: {
        background: 'linear-gradient(45deg, ' + Colors.teal500 + ' 45px, transparent 45px)64px 64px,' +
                    'linear-gradient(45deg, ' + Colors.teal500 + ' 45px, transparent 45px,transparent 91px, ' + Colors.tealA100 + ' 91px, ' +
                    Colors.tealA100 + ' 135px, transparent 135px),' + 'linear-gradient(-45deg, ' + Colors.teal500 +
                    ' 23px, transparent 23px, transparent 68px,' + Colors.teal500 + ' 68px,' +
                    Colors.teal500 + ' 113px,transparent 113px,transparent 158px,' + Colors.teal500 + ' 158px)',
        backgroundColor: Colors.tealA100 + ' !important',
        backgroundSize: '128px 128px'
      }
    },
    {
      color: {
        name: 'Blue Grey',
        light: Colors.blueGrey200,
        medium: Colors.blueGrey500,
        dark: Colors.blueGrey700,
      },
      // bricks: 🝙
      pattern: {
        background: 'linear-gradient(135deg, transparent 22px, ' + ColorManipulator.fade(Colors.blueGrey500, 0.3) + ' 22px, ' +
                    ColorManipulator.fade(Colors.blueGrey500, 0.3) + ' 24px, transparent 24px, transparent 67px, ' +
                    ColorManipulator.fade(Colors.blueGrey500, 0.3) + ' 67px, ' + ColorManipulator.fade(Colors.blueGrey500, 0.3) + ' 69px, transparent 69px),' +
                    'linear-gradient(225deg, transparent 22px, ' + ColorManipulator.fade(Colors.blueGrey500, 0.3) + ' 22px, ' +
                    ColorManipulator.fade(Colors.blueGrey500, 0.3) + ' 24px, transparent 24px, transparent 67px, ' +
                    ColorManipulator.fade(Colors.blueGrey500, 0.3) + ' 67px, ' + ColorManipulator.fade(Colors.blueGrey500, 0.3) + ' 69px, transparent 69px)0 64px',
        backgroundColor: ColorManipulator.fade(Colors.blueGrey200, 0.3) + ' !important',
        backgroundSize: '64px 128px',
      }
    },
    {
      color: {
        name: 'Brown',
        light: Colors.brown200,
        medium: Colors.brown500,
        dark: Colors.brown700,
      },
      // stars: ✦
      pattern: {
        background: 'radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%),' +
                    'radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%)',
        backgroundColor: Colors.brown200 + ' !important',
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0, 40px 40px'
      }
    },
    {
      color: {
        name: 'Deep Orange',
        light: Colors.deepOrangeA100,
        medium: Colors.deepOrange500,
        dark: Colors.deepOrange700,
      },
      // scallops: ⌓
      pattern: {
        background: 'radial-gradient(circle at 100% 150%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 24%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 25%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 28%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 29%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 36%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 36%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 40%, transparent 40%, transparent),' +
                    'radial-gradient(circle at 0 150%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 24%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 25%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 28%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 29%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 36%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 36%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 40%, transparent 40%, transparent),' +
                    'radial-gradient(circle at 50% 100%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 10%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 11%, ' +
                    ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 23%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 24%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 30%, ' +
                    ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 31%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 43%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 44%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 50%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 51%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 63%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 64%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 71%, transparent 71%, transparent),' +
                    'radial-gradient(circle at 100% 50%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 5%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 6%, ' +
                    ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 15%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 16%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 20%, ' +
                    ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 21%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 30%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 31%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 35%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 36%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 45%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 46%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 49%, transparent 50%, transparent),' +
                    'radial-gradient(circle at 0 50%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 5%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 6%, ' +
                    ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 15%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 16%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 20%, ' +
                    ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 21%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 30%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 31%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 35%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 36%, ' + ColorManipulator.fade(Colors.deepOrange500, 0.3) + ' 45%, ' +
                    ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 46%, ' + ColorManipulator.fade(Colors.deepOrangeA100, 0.3) + ' 49%, transparent 50%, transparent)',
        backgroundSize:'100px 50px',
      }
    },
    {
      color: {
        name: 'Grey',
        light: Colors.grey200,
        medium: Colors.grey500,
        dark: Colors.grey700,
      },
      // waves: ∿
      pattern: {
        background: 'radial-gradient(circle at 100% 50%, transparent 20%, ' + ColorManipulator.fade(Colors.grey200, 0.3) + ' 21%, ' + ColorManipulator.fade(Colors.grey200, 0.3) + ' 34%, transparent 35%, transparent),' +
                    'radial-gradient(circle at 0% 50%, transparent 20%, ' + ColorManipulator.fade(Colors.grey200, 0.3) + ' 21%, ' + ColorManipulator.fade(Colors.grey200, 0.3) + ' 34%, transparent 35%, transparent) 0 -50px',
        backgroundColor: Colors.grey500 + ' !important',
        backgroundSize: '75px 100px',
      }
    },
  ];

  static getOverlay(untexturedSide, pattern) {
    const overlay = {
      clearBottom: 'linear-gradient(to top, ' + ShuffleTheme.palette.canvasColor + ', transparent),',
      clearBottomLeft: 'linear-gradient(to top right, ' + ShuffleTheme.palette.canvasColor + ', transparent),',
      clearBottomRight: 'linear-gradient(to top left, ' + ShuffleTheme.palette.canvasColor + ', transparent),',
      clearLeft: 'linear-gradient(to right, ' + ShuffleTheme.palette.canvasColor + ', transparent),',
      clearNone: '',
      clearRight: 'linear-gradient(to left, ' + ShuffleTheme.palette.canvasColor + ', transparent),',
      clearTop: 'linear-gradient(to bottom, ' + ShuffleTheme.palette.canvasColor + ', transparent),',
      clearTopLeft: 'linear-gradient(to bottom right, ' + ShuffleTheme.palette.canvasColor + ', transparent),',
      clearTopRight: 'linear-gradient(to bottom left, ' + ShuffleTheme.palette.canvasColor + ', transparent),',
    };
    let {background, ...other} = pattern;
    let overlaidPattern = {
      background: overlay[untexturedSide] + background,
      ...other
    };
    return overlaidPattern;
  }
}
