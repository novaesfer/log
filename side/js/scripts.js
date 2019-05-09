$(document).ready(function(){
    var hadouken = [37, 39, 65];
    var ratatugen = [39, 37, 66];
    var shoryuken = [39, 37, 65];
    var seta = [38];
    var move = [];

$("body").bind("keydown", function(e){

	switch(e.keyCode) {
		case 27:
			move = [];
		return;
		default:
			move.push(e.keyCode);
		break;
	}
	
	if(move.length > 3) {
		move = [];
		return;
	} else if(move.join() == hadouken.join()) {
		$(this).html("<img src='https://i.pinimg.com/originals/8d/64/80/8d64805ff6596048ef30c3dbddb5ef6c.gif' width='100%' />");
		move = [];
		return;
	} else if(move.join() == ratatugen.join()) {
		$(this).html("<img src='http://2.bp.blogspot.com/-B5uegH1Kdso/VQmCdxRVNPI/AAAAAAAANxk/OIa8bTTASpo/s1600/Ryu%2B5.gif' width='100%' />");
		move = [];
		return;
    }
    
    else if(move.join() == shoryuken.join()) {
        $(this).html("<img src='https://vignette.wikia.nocookie.net/marvelvscapcom/images/2/2b/Ryu-shoryuken-xm.gif/revision/latest?cb=20110909055049' width='100%' />");
        move = [];
        return;
    }

    else if(move.join() == seta.join()) {
        $(this).html("<img src=#");
        move = [];
        return;
    }
})
})
