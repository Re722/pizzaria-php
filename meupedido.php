<html>

	<head>

<title>Meu pedido</title>
<meta http-equiv="Content-Type"
    content="text/html; charset=utf-8">
    
    
    </head>
    
    
    
    <body bgcolor="#FFFFFF" text="#000000" link="#000000"
        
        vlink="#000000" alink="#000000">
        
        <?php
        
        include_once "cabecalho.php";
        
        ?>
		
		<table width="100%" border="0" cellspacing="0">
		
			<tr bgcolor="#91acda">
			
				<td width="39%">
							<b><font size="2"
				face="Verdana, Arial, Helvetica, sans-serif">
						Meu 
			pedido</font></b></td>
				
			<td width="29%"><b><font size="2"
				 face="Verdana, Arial, Helvetica, sans-serif"> 
				 
				 		Fechar pedido</font></b></td>
				
			<td width="32%"><b><font size="2"
					face="Verdana, Arial, Helvetica, sans-serif">
					<a href="index.php">Retornar</a></font></b></td>			
			</tr>
			
			<tr bgcolor="#FFFFFF">
			
				<td width="39%">
					
					<table width="100%" border="0" cellspacing="0">
					
						<tr bgcolor="#CCCCCC">
						
							<td><i><b><font size="2" 
							face="Arial, Helvetica, sans-serif">Pizza</font></b></i></td>
							
			<td><i><b><font size="2" 
					face="Arial, Helvetica, sans-serif">
					Valor</font></b></i></td>
			
			</tr>
			
			<?php include_once "dadospedido.php"; ?>
			
			
</table>
</td>

<td width="29%">&nbsp;</td>
<td width="32%">&nbsp;</td>

</tr>
		
</table>

<?php 

include_once "rodape.php";

?>
	
<p>&nbsp;</p></body>

</html>
