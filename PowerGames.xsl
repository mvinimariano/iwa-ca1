<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <html>
        <head>
            <title>Power Games </title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="stylesheet" href="css/PowerGames.css" />
            <script type="text/javascript" src="js/PowerGames.js">x</script>
        </head>
            <body>
                <h2>
                    <img src="img/powergame.png" alt="PW Logo" width="100" height="100" />Welcome to Power Games</h2>
                <p>Select your Games from the menu below. To calculate the amount of the bill, click the Calculate Bill button. Check the "Highlight DLC Games" box to highlight DLC Games .</p>
                <table id="menuTable" border="1" class="indent">
                    <thead>
                        <tr>
                            <th colspan="3">Power Games Catalogue</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Games</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="//section">
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="entry">
                                <tr>
                                    <xsl:attribute name="DLC">
                                        <xsl:value-of select="boolean(@DLC)" />
                                    </xsl:attribute>
                                    <td align="center">
                                        <input name="item0" type="checkbox" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="item" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="price" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
                <form class="indent">
                    <p>
                        <input type="button" name="btnCalcBill" value="Calculate Bill" id="calcBill" />
                Total: €
                <input type="text" name="txtBillAmt" /><input type="checkbox" name="cbOpts" value="isDLC" id="showDLC" /><label for="showDLC">Highlight DLC Games</label></p>
                </form>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet> 