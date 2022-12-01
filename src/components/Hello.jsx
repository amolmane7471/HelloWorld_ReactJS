import React from "react";
import './Hellocss.css';

function Hello(){
    return(
        <body>
		<header class="headerContainer">
			<h1>HEADER - Sample Flexbox Example</h1>
		</header>
		<div class="mainContainer">
			<section class="mainContentItem">
				<article>
					<h2>First Article</h2>
					<p>Vernon Dursley, or Uncle Vernon as Harry Potter calls him, lives at number 4, Privet Drive with his
                         wife, Petunia and son, Dudley. He is a director of a firm called Grunnings, which makes drills. 
                         He is a big, beefy man with hardly any neck, and he has a moustache. He doesn’t like people who 
                         dress in funny clothes (particularly cloaks), he hates Harry talking about anything acting in a 
                         way it shouldnt like a motorbike flying,and he is irritated by most things his nephew, Harry does.</p>
				</article>
				<article>
					<h2>Second Article</h2>
					<p> Petunia Dursley, or Aunt Petunia as Harry Potter calls her lives at number 4, Privet Drive with her 
                        husband Vernon and her son, Dudley. She is the sister of Lily Potter, Harry’s mother but that doesn’t
                        mean that she treats Harry any better than Uncle Vernon. Petunia is thin and blonde with nearly twice 
                        the usual amount of neck – which comes in very useful when she’s spying on the neighbours over the garden fence.</p>
				</article>
				<article>
					<h2>Third Article</h2>
					<p> Dudley Dursley lives with his parents, Vernon and Petunia and Harry at number 4, Privet Drive. He is 
                        Harry's horrible, non-magical and slightly older cousin. He is blond, hates exercise and bullies Harry 
                        whenever he can, including at school where Dudley has a gang that he gets to pick on his own cousin. 
                        A very spoiled little boy, he insists on having more birthday presents than the year before and he pretends 
                        to cry to get whatever he wants. He likes watching television and never likes to miss his programmes.</p>
				</article>
			</section>

			<sideBar class="sideBarItem sideBarLeftItem">
				<div class="center">
					<p>Left Side Bar</p>
				</div>
			</sideBar>

			<sideBar class="sideBarItem sideBarRightItem">
				<div class="center">
					<p>Right Side Bar</p>
				</div>
			</sideBar>
		</div>
		<footer class="footerContainer">Footer</footer>
	</body>


    );
}
export default Hello;