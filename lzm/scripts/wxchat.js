$(function(){
    function Multiply(ID) {
        var Touched = $("#" + ID);
        var x = Touched.position().top;
        var y = Touched.position().left;
        var NewLeaf = "";
        for (var i = 0; i <= settings.multiplynumber; i++) {
            leafNum += 1;
            var Number = 1 + Math.floor(Math.random() * settings.howmanyimgsare);
            var CurrentClass = Touched.attr("class").replace("AutomLeaffalling", "");
            NewLeaf = '<img id="lf' + leafNum + '" class="AutomLeaf ' + CurrentClass + '" src="' + leafsfolder + Number + '.png"/>';
            $("body").append(NewLeaf);
            var NewLeaf = $("#lf" + leafNum);
            NewLeaf.css({top: x + "px", left: y + "px",}).animate({opacity: 1,}, 300);
            DropLeaf("lf" + leafNum, true);
            LeafTouch("lf" + leafNum)
        }
    }


});