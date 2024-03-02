CLI Concepts
Architecture concepts
Pure/impure pipes, Async pipe
Rxjs operators, types of subjects
ng-container, ng-content, ng-template
view encapsulation
change detection ***
SCSS

git concepts
    -> merge conficts
    -> stash
    -> reset

ChatGPT
Unit 

public name:string = "abc";


CLI:
----
WHY
1) Creaete new project
2) Create boiler plate code for 
    components
    modules
    pipes
3) linting, testing
4) bundling


FILES:
------
1) Package.json

    -> scripts
    -> dependencies
    -> devdependencies

2) node_modeules
    -> all packages will download in this folder

    => npm install  (to download packages)

3) package-lock.json

    Lock the package versions

4) angular.json

    project configuration file

    -> default ts,html,css files
    -> bundle budgets
    -> scripts, styles array

5) tsconfig.app.json, tsconfig.json

    -> typescript configuration

6) README.md

    -> Project usage instructions

7) jasmine -> unit test case framework
   karma   -> unit test case runner

8) .gitignore

    Files that git should ignore

9) src/styles.css

    global css file

10) src/polyfills.ts

    multiple browser support code

11) src/assets

    -> auido, video, data

12) src/environments

    -> dev, testing, pre production, production setups

13) main.ts

    -> initial loading ts file


Angular bootstrapping order:
----------------------------

angular.json -> main.ts -> app.module.ts -> app.component ->  thorugh rotung
                                                              total application


Bundling:
---------

WHY:
----
    -> Browser can download 90+ files only from one website.
    -> Big file download faster than combination of small files.

HOW:
----
    1) ng build

        bunldes:
        ========

            main.js       ->    total application code
            polyfiils.js  ->    multiple browser support code
            runtime.js    ->    webpack code (bundle, unbundle related code)
            vendor.js     ->    third party packages code
            styles.css
            index.html


Bundle Optimization techniques:
-------------------------------
1) Minification: code in single line
   ------------
    <p>
        abc
    <p>

    <p>abc</p>

2) Uglification: Big names into small names
   ------------

    getPagedVehicles()

    a1()

3) Tree shaking: Removing unused code
   ------------

    classes, component, pipe, module, service


4) AOT compilation instaed of JIT compilation.


    AOT: Ahead of time
    JIT: Just in time

    -> AOT compiles the code while bundling 
       the package
    -> no need to add compiler in final bundles
    -> no need to comiple code in browser



Decorator:   useful to provide metadata
----------

    4 types:
    --------

    1) class decorators:     componet, module, pipe, directive, injectable
    
    2) property decorators:  input, output
    
    3) method decorators:    hostlisten, hostbinding

    4) argument decorators:  inject



Pure pipe: Renders for pipe input value changes
---------- 
        Ex: uppercase, date


Impure pipe: Renders for every change detection in angular
------------
        Ex: async


Subjects:
---------

    1) subject                all upcoming values
    2) behavirour subject     one prev + all upcoming
    3) reply subject          all prev + all upcoming
    4) async subject          one latest value


RXJS Operators:
---------------

    of, from   =>   creational operators

    forkjoin   =>   parallel api calls

                    forkjoin(
                        this.http.get("url1"),
                        this.http.get("url2"),
                        this.http.get("url3"),
                    )
        
    concatmap  =>   sequential api calls
    
    switchmap  =>   cancel the previour observables
                    when new observable comes.



1) ng-container => logical tag, no physical existance in DOM.

2) ng-content   => useful to load content projected data

    <app-child>
        <h1>hello</h1>
    </app-child>

3) ng-template

    To load templates conditionally


ViewEncapsulation:
------------------

    Angular will create unique directive for each component elements.
    By that angular will segrate the component elements.

    3 stategies:
    ------------
    1) Emulated:  only that component
    2) shadowDOM: that component and child components
    3) none: applicable to all components

