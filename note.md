

## Console

```javascript
$('body').viewModel();

can.route.attr();
```

```html
<can-import from="place-my-order/loading.component!" />
<can-import from="place-my-order/header.component!" />
<pmo-header page="{page}"></pmo-header>


{{#switch page}}
  {{#case "home"}}
    <can-import from="place-my-order/home.component!"
        can-tag="pmo-loading">
      <pmo-home></pmo-home>
    </can-import>
  {{/case}}
  {{#case "restaurants"}}
    <can-import from="place-my-order/restaurant/list/"
        can-tag="pmo-loading">
      <pmo-restaurant-list></pmo-restaurant-list>
    </can-import>
  {{/case}}
  {{#case "order-history"}}
    <can-import from="place-my-order/order/history.component!"
        can-tag="pmo-loading">
      <pmo-order-history></pmo-order-history>
    </can-import>
  {{/case}}
{{/switch}}
```
