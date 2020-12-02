# nexrender-action-normalize-color

Pre-render action that will take a hex value **without the #** and convert to the appropriate format for nexrender.


```json
{
  "assets": [
    {
      "type": "data",
      "layerName": "branded_slide",
      "property": "Effects.Fill.Color",
      "value": "ED2032"
    }
  ],
  "actions": {
    "prerender": [
      {
        "module": "nexrender-action-normalize-color",
        "layers": [
          "branded_slide"
        ]
      }
    ]
  }
}
```
