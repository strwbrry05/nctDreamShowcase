# nctDream showcase
[2025] React web app showcasing the kpop group NCT Dream. Inlcudes many interesting and distinct features such as 'day-and-night' mode, slideshows, carousels, drag-and-drop components, and many more. Primarily desktop focused, page is still responsive and does shrink down to its own mobile view.

![Home](nctDream_files/projectDay.gif)
![Home](nctDream_files/projectNight.gif)


## About the Project
When designing and developing I find that the projects where I shine the most are those that are directly connected to my interests and hobbies. I found NCT Dream exactly when they debuted and have loved listening to their music ever since. While I have slightly outgrown them, I still find myself thinking back to that time with lots of nostalgia and love. This idea had been on my mind now for a couple of years, but I had never dared to do anything about it. While challenging, my love for this project allowed me to test new boundaries and features I had never attempted before. Incredibly fun project, I learned so so much.

### Nav + Footer
Interesting feature about the nav is that at the start, it remains one color but once you scroll, it turns black and sticks to the top of the window. This was inspired by the Netflix nav which acts in a somewhat similar way.

<img src="nctDream_files/day_nav.png" width="650"/>
<img src="nctDream_files/night_nav.png" width="650"/>

<br/>
Both of the footers look identical in both the night and day version. This makes the page as a whole feel more professional and mature.

<img src="nctDream_files/day_footer.png" width="650"/>

### Hero
The hero contains an image of all of the group members. On load, each member cut out pops up indicating to the user that they are interactable. If a user selects a member, the page will redirect you to that members' information section. This feature only works on screens larger than mobile.

<img src="nctDream_files/about_day_home.png" width="650"/>
<img src="nctDream_files/about_night_home.png" width="650"/>


### Member Information
Below are member information sections from both day version and night version. Each is built with a member image, a slideshow of related images, their name, birthday, star sign, blood type, and a short description of that member. As a fun feature, when scrolling down the page for the first time, the member images slide in to frame.

<img src="nctDream_files/about_m1.png" width="650"/>
<img src="nctDream_files/about_m2.png" width="650"/>
<img src="nctDream_files/about_m3.png" width="650"/>
<img src="nctDream_files/about_m4.png" width="650"/>
<img src="nctDream_files/about_m5.png" width="650"/>
<img src="nctDream_files/about_m6.png" width="650"/>
<img src="nctDream_files/about_m7.png" width="650"/>


### Albums
An infinite carousel of all of the groups music. When hovered over, the carousel pauses. Once the mouse leaves the section, the carousel begins again.

<img src="nctDream_files/day_albums.png" width="650"/>
<img src="nctDream_files/night_albums.png" width="650"/>

### FAQ
FAQ section contains an accordion menu with questions and answers relating to the kpop group.

<img src="nctDream_files/day_faq.png" width="650"/>
<img src="nctDream_files/night_faq.png" width="650"/>

### Socials
An innovative way to link socials. Photocards are popular with kpop groups and I wanted to be able to incorporate them on the website. In order to do that I made them draggable and obstructing their socials. In that way, the user will have to interact with the photocards to get to their goal (socials). Feature only works on screens larger than mobile.

<img src="nctDream_files/day_cards.png" width="650"/>
<img src="nctDream_files/day_cards_moved.png" width="650"/>

<img src="nctDream_files/night_cards.png" width="650"/>
<img src="nctDream_files/night_cards_moved.png" width="650"/>

### MVs
On the bottom of the page there is an embedded a youtube playlist with all of the groups music videos. 

<img src="nctDream_files/day_mv.png" width="650"/>
<img src="nctDream_files/night_mv.png" width="650"/>

## Responsive View
Designed desktop first, developed mobile first. Some features are not available on mobile screens. For the best viewing experience, ideal screen size is laptop or larger.

<span>
<img src="nctDream_files/mobile_home.png" width="250"/>
<img src="nctDream_files/mobile_nav.png" width="250"/>
<img src="nctDream_files/mobile_m.png" width="250"/>
<img src="nctDream_files/mobile_faq.png" width="250"/>
</span>

## Potential Improvements
- NAV: The nav bar and the toggle 'day-night' button are not centered.
  
- HERO: When hovering over members, some of the pop-ups are not accurate. Correcting this process and perhaps adding a label whislt hovering over the members would make this a more user friendly feature.

- MEMBERS: For the additional images slideshow. If a user wanted to look at an image closer, allow the image to enlarge and block out the rest of the page with a screen. Perhaps allowing the user to download the image they clicked on or move between the rest of the slideshow images.
  
- ALBUMS: If an album is selected, a snippet of music plays from their title track off that album. Would also include links to spotify and apple music if the user were interested in listening to the full album.

- MVs: Somehow allow for the automatic playing of videos. Perhaps even going as far as playing the music unmuted for the user when they load the page for the first time. Of course, a mute button would be present on screen at all times for those who don't wish to listen to the music while they explore the page.

## Built Using
- HTML
- CSS
- Tailwind CSS
- VSCode
- React + Vite
- NodeJS

## Contact
Any comments, questions, or concerns?\
Contact Jacqueline Molina: molina.jq19@gmail.com

