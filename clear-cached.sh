#/bin/sh
yarn clean
rm -rf dist
rm -rf dist-types
rm -rf node_modules
echo "Now run setup.sh to restore modules and prepare yarn."