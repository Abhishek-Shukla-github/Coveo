# Coveo Technical Challenge

The Coveo Technical Challenge is built to test general web skills (HTML, CSS, JS). It utilizes the Coveo Atomic and Headless frameworks. Using Coveo's public documentation is allowed. We recommend looking at the following:

Coveo Atomic Documentation: https://docs.coveo.com/en/atomic/latest/
Coveo Headless Documentation: https://docs.coveo.com/en/headless/latest/

The challenge is a single HTML file. You should be able to open the HTML page on any browser. We do recommend that you use a modern web browser (ie. not Internet Explorer). You can create seperated JS and CSS files for readability's sake.

## Task #1: Create a custom YouTube result template

Your first task will be to create a custom YouTube result template. The hard requirements are:

- You must not replace the current default template (you need to create a result template that will only be applied to YouTube content).
- The structure of the YouTube result template should look like the layout below (you are responsible of making it look good):

|------------------------------------------------------------------------------|
|  [Featured or top result badge]                                     [date]   |
|  [This is where you should have the YouTube video title]   |-------------|   |
|                                                            |             |   |
|  [This is where the excerpt should be]                     |  thumbnail  |   |
|                                                            |             |   |                           
|                                                            |             |   |
|  Length: [Duration of the video]                           |-------------|   |
|  [Display the uri of the video]                                              |
|------------------------------------------------------------------------------|

- Everything between brackets are placeholders. Ex: The [Featured or top result badge] placeholder should not have this text; it should be displayed as a badge if the result is either a featured or top result.
- The field for the video duration is @ytvideoduration. Unfortunately, due to a framework limitation, you will not be able to format the duration as MM:SS. However, we expect to see to total number of seconds. Ex: 179 sec
- The field for the thumbnail is @ytthumbnailurl.
- Try to make the result template as mobile responsive as possible.

## Task #2: Implement the logic behind the "Filter for 2022 Content" button

We ask you to implement the logic behind the "Filter for 2022 Content" button using the Headless framework. You are responsible of handling the display logic of the button. The CSS statements for the button are already created. We recommend you use them.
All the necessary Headless actions are already imported. We highly recommend that you use these actions and read their documentation.
The field to filter against is the @year field and the query parameter used to filter should be the advanced query (aq). Do not forget to log the appropriate analytics event (hint: check the imported actions; hint#2: the filter is a static filter selection).