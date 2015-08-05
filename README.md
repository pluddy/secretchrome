# secretchrome

1. clone
2. CD to folder
3. npm install
4. npm install -g webpack
5. webpack --watch
6. open test.html

# Known Limitations/Bugs

* All children exist under the video DOM node. Which may not be desirable.
* Missing components
* Styling isn't completely understood yet.
* Figure out extensibility better. Do they just build a react component? or follow a plugin architecture?
* ?

### Future..
* React 0.14 migration changes
* Add lots of `invariant` calls to help devs use the tool best
* Utilize `node.process.ENV` to strip out unnecassary code, like `invariant` calls
