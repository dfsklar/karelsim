@echo off

rem
rem optimizejs.bat: Use require.js optimizer to combine and compress js files
rem
rem
rem All notes below refer to <build>, e.g., .../karelsim/build
rem
rem Invoke like:
rem    cd <build>
rem    call build
rem
rem Prerequisites:
rem    Install node.js from nodejs.org into C:\Program Files\nodejs
rem    Download r.js from requirejs.org into <build>
rem    Ensure <build>\app.build.js exists
rem    Ensure this script exists (<build>\optimizejs.bat)
rem
rem Output:
rem    If things work, you should see <build>\..\dist created
rem    and filled with a deployable directory structure (with optimized JS files)
rem

echo Beginning JS Optimization...

"C:\Program Files\nodejs\node.exe" .\r.js -o .\app.build.js

echo JS Optimization complete.
