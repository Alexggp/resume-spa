import React from "react";

import classes from "./SpaceManAnimation.module.css";

const FrontPage = () => {



  return (
    <div className={classes.backg}>
		<div className={classes.planet}>
			<div className={classes.r1}></div>
			<div className={classes.r2}></div>
			<div className={classes.r3}></div>
			<div className={classes.r4}></div>
			<div className={classes.r5}></div>
			<div className={classes.r6}></div>
			<div className={classes.r7}></div>
			<div className={classes.r8}></div>
			<div className={classes.shad}></div>
		</div>
		<div className={classes.stars}>
			<div className={classes.s1}></div>
			<div className={classes.s2}></div>
			<div className={classes.s3}></div>
			<div className={classes.s4}></div>
			<div className={classes.s5}></div>
			<div className={classes.s6}></div>
		</div>
		<div className={classes.an}>
			<div className={classes.tank}></div>
			<div className={classes.astro}>
					
					<div className={classes.helmet}>
						<div className={classes.glass}>
							<div className={classes.shine}></div>
						</div>
					</div>
					<div className={classes.dress}>
						<div className={classes.c}>
							<div className={classes.btn1}></div>
							<div className={classes.btn2}></div>
							<div className={classes.btn3}></div>
							<div className={classes.btn4}></div>
						</div>
					</div>
					<div className={classes.handl}>
						<div className={classes.handl1}>
							<div className={classes.glovel}>
								<div className={classes.thumbl}></div>
								<div className={classes.b2}></div>
							</div>
						</div>
					</div>
					<div className={classes.handr}>
						<div className={classes.handr1}>
							<div className={classes.glover}>
								<div className={classes.thumbr}></div>
								<div className={classes.b1}></div>
							</div>
						</div>
					</div>
					<div className={classes.legl}>
						<div className={classes.bootl1}>
							<div className={classes.bootl2}></div>
						</div>
					</div>
					<div className={classes.legr}>
						<div className={classes.bootr1}>
							<div className={classes.bootr2}></div>
						</div>
					</div>
					<div className={classes.pipe}>
						<div className={classes.pipe2}>
							<div className={classes.pipe3}></div>
						</div>
					</div>
				</div>
			</div>
    </div>

  );
}

export default FrontPage;