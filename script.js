let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = 1920;
        canvas.height = 1080;
        let time = 0;
    
        function draw() {
            requestAnimationFrame(draw);
            let centerX = canvas.width / 2;
            let centerY = canvas.height / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
    
            for (let i = 0; i < 100; i++) {
                ctx.fillStyle = "rgba(0, 0, 0, 1)";
                ctx.beginPath();
                let p = i + time;
                let radius = 3 + Math.cos(p) * Math.sin(i / 31);
                let x = Math.sin(p) * Math.sin(i / 31);
                let y = Math.cos(i / 31);
                ctx.arc(
                    centerX + (1 / radius) * x * centerX,
                    centerY + (y / radius) * centerX,
                    (90 / (radius * radius)) * 0.25,
                    0,
                    2 * Math.PI
                );
                ctx.fill();
            }
            time += 0.01;
        }
    
        draw();