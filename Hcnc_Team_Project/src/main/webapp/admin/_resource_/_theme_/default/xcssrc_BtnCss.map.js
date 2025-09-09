(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Button" :
            			{
            				"class" :
            				[
            					{
            						"btn_top_menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"iconPosition" : "left",
            									"color" : nexacro.ColorObject("white"),
            									"font" : nexacro.FontObject("normal bold  14pt/normal \"Arial\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.5px"),
            									"wordSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none #ffffff"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"iconPosition" : "left",
            									"color" : nexacro.ColorObject("#0F89F9"),
            									"font" : nexacro.FontObject("normal 700 14pt /normal \"Arial\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.5px"),
            									"wordSpacing" : nexacro.CSSValueObject("5px")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
