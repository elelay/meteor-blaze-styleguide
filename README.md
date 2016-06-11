# blaze-styleguide

This is a simple emulation of
[Chromatic](https://github.com/meteor/chromatic) and
[react-storybook](https://github.com/kadirahq/react-storybook)
for blaze-based projects.

It grew out of my appreciation for how useful it would be,
but my unwillingness to rewrite my whole apps using react.

## Recommended usage

### Small app (bearable time to reload)

1. put your UI components in a separate package
2. create a new package *yourapp*-catalogue depending on blaze-styleguide and your
   UI packages. In this package, describe your components.
   Make it `debugOnly` so it's not included in production.
3. add *yourapp*-catalogue to your app,
4. add this to your app client code:
   ```javascript
	SG.configure({
		basePath: "/styleguide"
	});
   ```
5. navigate to http://localhost:3000/styleguide/catalogue

### Big app

1. you've already got your UI components in packages, right?
2. create a new package *yourapp*-catalogue depending on blaze-styleguide and your
   UI packages. In this package, describe your components.
3. create a new *yourapp*-showcatalogue application depending on *yourapp*-catalogue and call `SG.configure()`
   in its client code.
4. Run *yourapp*-showcatalogue instead of your app while you're focusing on UI design.
5. navigate to http://localhost:3000/catalogue

## Examples

Checkout [blaze-styleguide-example](https://github.com/elelay/meteor-blaze-styleguide-example).

## Registering a component


```javascript
	SG.register("sgScreen")
		.add("default", function() {
			return {
				screens: SG.screens,
				selected: function() {
					return (this.name === SG.screens[0].name);
				},
				action: function() {}
			};
		});
```

## Contributing

This project can be improved in any of its aspects.

I'd be very pleased to see it grow, but be even more pleased to see *Chromatic* support Blaze
and kill this project.

With that in mind, contributions are welcome :-)

## LICENSE

blaze-styleguide is licensed under the MIT License.
