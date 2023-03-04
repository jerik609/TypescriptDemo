some notes about the tsconfig.json file

"strict" - enables all the options, otherwise set to false and the needed ones to true

"outDir" - where the output files should be generated, e.g. *.js files
"sourceMap" - useful in debugging - since we write in typescript, but we run javascript on the browser side, we need some sort of mapping where the js code is comming from, in angular sourcemap is in dev mode by default true
"noEmit" - no output is generated

NOTE: typescript will not prevent code generation, even if error is shown, the code will still be generated
        this is tricky! KEEP IN MIND: DO NOT RELY ON TYPESCRIPT TO NOT GENERATE INVALID CODE
