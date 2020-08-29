## Project Goals
#### *decode* was built to translate the enigmatic visual colour code used in Peter Saville's album cover designs readily and easily. 

## Design Notes
* This project adapts much of the visual language used in Peter Saville's work, including his choice of palette, typefaces, letterspacing & kerning, as well as motifs such as the black/yellow construction hash.
* Much of his work is conceptual and intentionally vague, and so much of the interaction is intentionally left vague and open to discovery.
* The code itself is meant to be enigmatic and not easily detectable, discernable, or readable, and is as such fundamentally not very accessible. One could, through descriptive labels, mitigate and allow some participation.

## Dev Notes

* Very experimental code, some commenting attempts to clarify 
* SCSS is all in one file for now 
* Colors should be made into :root variables which can be accessed both by JS and SCSS

## TODOs & Improvements

* Create *encode*, which could use either HTML Canvas or another tool to generate colour codes through typed entries; could repurpose a lot of the existing code/object models.
* Componentize several elements (container, flipper, code, contact info)
* Split stylesheets into component-driven files
* Create color variables & refactor into object model & stylesheets
* Make responsive
* Make more accessible through better labelling & tabindices

💿 Built in 2020 💿