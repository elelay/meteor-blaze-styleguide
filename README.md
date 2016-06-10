# blaze-styleguide

This is a simple emulation of
[Chromatic](https://github.com/meteor/chromatic) and
[react-storybook](https://github.com/kadirahq/react-storybook)
for blaze-based projects.

It grew out of my appreciation for how useful it would be,
but my unwillingness to rewrite my whole apps to react.

## Recommended usage

1. put your UI components in packages
2. create a new package *yourapp*-catalogue depending on blaze-styleguide and your
   UI packages. In this package, describe your components.
3. create a new app depending on *yourapp*-catalogue and call SG.configure
   in its client code. Run it. You're done.

## Examples

Checkout blaze-styleguide-example (to be released).
	
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