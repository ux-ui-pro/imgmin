## install

```JS
npm i -g yarn imagemin imagemin-mozjpeg imagemin-pngquant imagemin-webp avif
```

```JS
yarn
```

```JS
yarn min
```

<p>Put the *.png and *.jpg sources in the /input folder, make $yarn min.</p>
<p>At the output we get /output with compressed /png /jpg /webp /avif.</p>


## if error
error command failed with exit code 1
```JS
rm -rf node_modules
yarn cache clean
yarn
```
