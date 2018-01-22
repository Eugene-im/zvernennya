// function drawCircle(selector, radius, x, y, k, angle)
// {
    
    
//     var total = $(selector).length;
//     var alpha = (Math.PI * 2 / total);
           
//     $(selector).each(function(index)
//     {
//         var theta = angle - alpha * index;
//         var pointx  = Math.floor(Math.cos( theta ) * radius ) - k;
//         var pointy  = Math.floor(Math.sin( theta ) * radius ) - k;
        
//         // if (index == 1 && index == Math.floor( total / 2 ) ){
//         //     $(this).css('left', pointx + x + 'px');
//         //     $(this).css('top', pointy  + y + 'px');
//         //     $(this).css('text-align', 'center'); 
//         // }
//         // else if (index > 1 && index < Math.floor( total / 2 ) ){
//         //     $(this).css('left', pointx + x + 'px');
//         //     $(this).css('top', pointy  + y + 'px');
//         //     $(this).css('text-align', 'right'); 
//         // }
//         // else if (index > Math.floor( total / 2 ) ){
//         //     $(this).css('left', pointx + x + 'px');
//         //     $(this).css('top', pointy  + y + 'px');
//         //     $(this).css('text-align', 'left');
//         // }
//         // else {
//             $(this).css('left', pointx + x + 'px');
//             $(this).css('top', pointy  + y + 'px');
//         // }
//     });
    
// }

function drawEllipse(selector, x, y, a, b, angle, k)
{
        
        var i = 0;
        var beta = -angle * (Math.PI / 180);    
        var sinbeta = Math.sin(beta);
        var cosbeta = Math.cos(beta);
        var steps = $(selector).length;
        
        $(selector).each(function(index)
        {
        i+= (360/steps);
        var alpha = i * (Math.PI / 180) ;
        var sinalpha = Math.sin(alpha);
        var cosalpha = Math.cos(alpha);
        var X = x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta);
        var Y = y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta);
            // console.log(steps);

        
        
        X = Math.floor(X) - k;
        Y = Math.floor(Y) - k;
        
        if (index == 0 ||index == 1 || index == 9 || index == 10 ||index == 11 ){
            $(this).css('left', X + 'px');
            $(this).css('top', Y + 'px');
            $(this).css('text-align', 'right'); 
            console.log('right');
        }
        else if (index == 3 || index == 4 ||index == 5 ||index == 6 ||index == 7 ){
            $(this).css('left', X + 'px');
            $(this).css('top', Y + 'px');
            $(this).css('text-align', 'left');
            console.log('left');
        }
        else if (index == 2 || index == 8){
            $(this).css('left', X + 'px');
            $(this).css('top', Y + 'px');
            $(this).css('text-align', 'center'); 
            console.log('center');
        }

        // $(this).css('top', X + 'px');
        // $(this).css('left', Y + 'px');
        
        });       
}

    $(document).ready(function() {
        drawEllipse('.box', 380, 380, 300, 300, 0, 160);
        drawEllipse('label', 282, 370, 500, 400, 0, 100);
    });