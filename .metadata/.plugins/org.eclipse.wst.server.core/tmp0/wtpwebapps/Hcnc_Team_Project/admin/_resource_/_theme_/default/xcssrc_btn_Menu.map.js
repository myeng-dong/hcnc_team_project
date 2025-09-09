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
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px"),
            									"edge" : nexacro.EdgeImageObject("none"),
            									"iconPosition" : "left",
            									"color" : nexacro.ColorObject("white"),
            									"font" : nexacro.FontObject("normal bold  14pt/normal \"Arial\""),
            									"letterSpacing" : nexacro.CSSValueObject("0.5px"),
            									"wordSpacing" : nexacro.CSSValueObject("5px")
            								}
            							}
            						}
            					},
            					{
            						"btnLogin" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 16px Arial, sans-serif")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 16px Arial, sans-serif")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 16px Arial, sans-serif")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 16px Arial, sans-serif")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_WF_DetailLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"font" : nexacro.FontObject("13px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Edit" :
            			{
            				"class" :
            				[
            					{
            						"edt_Adr" :
            						{
            							"self" :
            							{
            								"readonly" :
            								{
            									"color" : nexacro.ColorObject("black")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Combo" :
            			{
            				"class" :
            				[
            					{
            						"cmb_readonly" :
            						{
            							"self" :
            							{
            								"readonly" :
            								{
            									"color" : nexacro.ColorObject("black")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"ATEAM" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ffffff")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							}
            						}
            					}
            				}
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
