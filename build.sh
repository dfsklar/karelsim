cd build
bash build.sh
cd ..
mkdir -p serve_from_here
cp -R dist/* serve_from_here
mkdir -p serve_from_here/sample_karel_programs
cp sample_karel_programs/* serve_from_here/sample_karel_programs
