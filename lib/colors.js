'use strict';
const pureWhite = {
    hex: '#ffffff',
};

const pureBlack = {
    hex: '#000000',
    rgb: [0, 0, 0]
};
/**
 * A comprehensive list of OWL Team colors
 */
 const colors = {
     DAL: {
        fullName: 'Dallas Fuel',
        primaryColor: 'darkBlue',
        secondaryColor: 'strongBlue',
        tertiaryColor: 'gray',
        colors: {
            darkBlue: {
                hex: '#032340',
                rgb: [3, 35, 64]
            },
            strongBlue: {
                hex: '#0072ce',
                rgb: [0, 114, 206]
            },
            gray: {
                hex: '#9EA2A2',
                rgb: '158, 162, 162'
            },
        },
     },
     ATL: {
         fullName: 'Atlanta Reign',
         primaryColor: 'gray',
         secondaryColor: 'darkRed',
         tertiaryColor: 'darkGray',
         colors: {
             gray: {
                 hex: '#C4C4C4',
                 rgb: [196, 196, 196]
             },
             darkRed: {
                 hex: '#910F1B',
                 rgb: [145, 15, 27]
             },
             darkGray: {
                 hex: '#323232',
                 rgb: [50, 50, 50]
             }
         }
     },
     BOS: {
        fullName: 'Boston Uprising',
        primaryColor: 'darkBlue',
        secondaryColor: 'yellow',
        tertiaryColor: 'black',
        colors: {
            darkBlue: {
                hex: '#174B97',
                rgb: [23, 75, 151]
            },
            yellow: {
                hex: '#EFDF00',
                rgb: [239, 223, 0]
            },
            black: pureBlack
        }
     },
     CDH: {
        fullName: 'Chengdu Hunters',
        primaryColor: 'orange',
        secondaryColor: 'lightBrown',
        tertiaryColor: 'darkBlue',
        colors: {
            orange: {
                hex: '#FFA000',
                rgb: [255, 160, 0]
            },
            lightBrown: {
                hex: '#B4926A',
                rgb: [180, 146, 106]
            },
            darkBlue: {
                hex: '#161823',
                rgb: [22, 24, 35]
            }
        }
     },
     FLA: {
        fullName: 'Florida Mayhem',
        primaryColor: 'yellow',
        secondaryColor: 'darkRed',
        tertiaryColor: 'black',
        colors: {
            yellow: {
                hex: '#FEDB00',
                rgb: [254, 219, 0]
            },
            darkRed: {
                hex: '#AF272F',
                rgb: [175, 39, 47]
            },
            black: pureBlack
        }
     },
     GLA: {
         fullName: 'Los Angeles Gladiators',
         primaryColor: 'purple',
         secondaryColor: 'black',
         tertiaryColor: 'white',
         colors: {
             purple: {
                 hex: '#3C1053',
                 rgb: [60, 16, 83]
             },
             black: pureBlack,
             white: pureWhite
         }
     },
     GZC: {
        fullName: 'Guangzhou Charge',
        primaryColor: 'darkBlue',
        secondaryColor: 'darkCyan',
        tertiaryColor: 'cyan',
        colors: {
            darkBlue: {
                hex: '#122C42',
                rgb: [18, 44, 66]
            },
            darkCyan: {
                hex: '#67A2B2',
                rgb: [103, 162, 178]
            },
            cyan: {
                hex: '#0FEFD9',
                rgb: [15, 239, 217]
            }
        }
     },
     HOU: {
        fullName: 'Houston Outlaws',
        primaryColor: 'green',
        secondaryColor: 'black',
        tertiaryColor: 'white',
        colors: {
            green: {
                hex: '#97D700',
                rgb: [151, 215, 0]
            },
            black: pureBlack,
            white: pureWhite
        }
     },
     HZS: {
        fullName: 'Hangzhou Spark',
        primaryColor: 'pink',
        secondaryColor: 'blue',
        tertiaryColor: 'white',
        colors: {
            pink: {
                hex: '#FB7299',
                rgb: [251, 114, 153]
            },
            blue: {
                hex: '#5788CE',
                rgb: [87, 136, 206]
            },
            white: pureWhite
        }
     },
     LDN: {
        fullName: 'London Spitfire',
        primaryColor: 'cyan',
        secondaryColor: 'orange',
        tertiaryColor: 'darkBlue',
        colors: {
            cyan: {
                hex: '#59CBE8',
                rgb: [89, 203, 232]
            },
            orange: {
                hex: '#FF8200',
                rgb: [255, 130, 0]
            },
            darkBlue: {
                hex: '#1C2B39',
                rgb: [28, 43, 57]
            }
        }
     },
     NYE: {
        fullName: 'New York Excelsior',
        primaryColor: 'darkBlue',
        secondaryColor: 'blue',
        tertiaryColor: 'red',
        colors: {
            darkBlue: {
                hex: '#171C38',
                rgb: [23, 28, 56]
            },
            blue: {
                hex: '#0F57EA',
                rgb: [15, 87, 234]
            },
            red: {
                hex: '#FF1C26',
                rgb: [255, 28, 38]
            }
        }
     },
     PAR: {
        fullName: 'Paris Eternal',
        primaryColor: 'darkBlue',
        secondaryColor: 'darkPink',
        tertiaryColor: 'orange',
        colors: {
            darkBlue: {
                hex: '#303D56',
                rgb: [48, 61, 86]
            },
            darkPink: {
                hex: '#8D042D',
                rgb: [141, 4, 45]
            },
            orange: {
                hex: '#FFAA1D',
                rgb: [255, 170, 29]
            }
        }
     },
     PHI: {
        fullName: 'Philadelphia Fusion',
        primaryColor: 'black',
        secondaryColor: 'gray',
        tertiaryColor: 'orange',
        colors: {
            black: pureBlack,
            gray: {
                hex: '#DCDCDC',
                rgb: [220, 220, 220]
            },
            orange: {
                hex: '#F99E29',
                rgb: [249, 158, 41]
            }
        }
     },
     SEO: {
        fullName: 'Seoul Dynasty',
        primaryColor: 'black',
        secondaryColor: 'gold',
        tertiaryColor: 'white',
        colors: {
            black: pureBlack,
            gold: {
                hex: '#AA8A00',
                rgb: [170, 138, 0]
            },
            white: pureWhite
        }
     },
     SFS: {
        fullName: 'San Francisco Shock',
        primaryColor: 'gray',
        secondaryColor: 'orange',
        tertiaryColor: 'gold',
        colors: {
            gray: {
                hex: '#75787B',
                rgb: [117, 120, 123]
            },
            orange: {
                hex: '#FC4C02',
                rgb: [252, 76, 2]
            },
            gold: {
                hex: '#CAB64B',
                rgb: [202, 182, 75]
            }
        }
     },
     SHD: {
        fullName: 'Shanghai Dragons',
        primaryColor: 'red',
        secondaryColor: 'black',
        tertiaryColor: 'yellow',
        colors: {
            red: {
                hex: '#D22630',
                rgb: [210, 38, 48]
            },
            black: pureBlack,
            yellow: {
                hex: '#FCE300',
                rgb: [252, 227, 0]
            }
        }
     },
     TOR: {
         fullName: 'Toronto Defiant',
         primaryColor: 'black',
         secondaryColor: 'red',
         tertiaryColor: 'gray',
         colors: {
             black: pureBlack,
             red: {
                 hex: '#C10021',
                 rgb: [193, 0, 33]
             },
             gray: {
                 hex: '#91A1AF',
                 rgb: [145, 161, 175]
             }
         }
     },
     VAL: {
        fullName: 'Los Angeles Valiant',
        primaryColor: 'darkGreen',
        secondaryColor: 'black',
        tertiaryColor: 'yellow',
        colors: {
            darkGreen: {
                hex: '#004438',
                rgb: [0, 68, 56]
            },
            black: pureBlack,
            yellow: {
                hex: '#D9C756',
                rgb: [217, 199, 86]
            }
        } 
     },
     VAN: {
        fullName: 'Vancouver Titans',
        primaryColor: 'darkBlue',
        secondaryColor: 'green',
        tertiaryColor: 'white',
        colors: {
            darkBlue: {
                hex: '#09226B',
                rgb: [9, 34, 107]
            },
            green: {
                hex: '#2FB228',
                rgb: [47, 178, 40]
            },
            white: pureWhite
        }
     },
     WAS: {
        fullName: 'Washington Justice',
        primaryColor: 'darkRed',
        secondaryColor: 'darkBlue',
        tertiaryColor: 'white',
        colors: {
            darkRed: {
                hex: '#990034',
                rgb: [153, 0, 52]
            },
            darkBlue: {
                hex: '#003768',
                rgb: [0, 55, 104]
            },
            white: pureWhite
        }
     }
 }
export const colors;