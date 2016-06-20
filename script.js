
// This is an the game level
// ' ' means that tile is blank
// '*' means to put a wall there
// '@' sets the player spawn point
// '!' puts lava there
// 'o' puts a coin in that position
// '.' is the finnish of the level
// 'x' represents an invisible dead zone
// 'c' is a checkpoint in the game
// 'e' is an enemy
// A number represents a moving platform, the number is how many blocks the platform moves
//
// Also keep in mind that the level must be:
// 48 chars wide, any further will go off the screen
// 32 chars high, any further will go off the screen

var levels =
[
    [
    "************************************************",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                  .           *",
    "*                                *****         *",
    "*                                              *",
    "* @         o o o o o o                        *",
    "************************************************"],

    [
    "************************************************",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                           o o o    .         *",
    "*             ********    **********************",
    "*            *       *!!!!*                    *",
    "*           *        ******                    *",
    "*          *                                   *",
    "*    @    *                                    *",
    "************************************************"],

    [
    "************************************************",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                o                o o o        *",
    "*               ***        **    ******        *",
    "*                           *!!!!*    *        *",
    "*                           *!!!!*    *        *",
    "* .     o o o               ******    ***      *",
    "*****   ******                               o *",
    "*   *!!!*                                   ****",
    "*   *****                                      *",
    "*                                              *",
    "*                                    **   **   *",
    "*                                     *!!!*    *",
    "*                             o o     *****    *",
    "*                            ****              *",
    "*                                              *",
    "*         o o o          o                     *",
    "*       *********       ***                    *",
    "*      *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "*     *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "* @  *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "************************************************"],

[
    "************************************************",
    "*                                              *",
    "*                                   o          *",
    "*                                  ***         *",
    "*                                              *",
    "*                           *****           ...*",
    "*                                       *   ****",
    "*                                              *",
    "*             o o o o o o                      *",
    "*            ************                      *",
    "*                                              *",
    "*      o o                   c                 *",
    "*      * *                  ***    o           *",
    "*                                  *           *",
    "*!!  !                                         *",
    "*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!          *",
    "***********************!************!  **      *",
    "*                     *!*                  *   *",
    "*                     *!*           o      *!!!*",
    "*      o o o          *!*         o   o   ******",
    "*      ******          !                       *",
    "*                     o o           !          *",
    "* @              o o *****  o o                *",
    "************     *****   ********     **   *****",
    "           *!!!!!*                  !  *!!!*    ",
    "           *!!!!!*                  !  *****    ",
    "           *******                  !           ",
    "                                                ",
    "                                                ",
    "                                    !           ",
    "                                    !!          ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!xxx!xxxx"],

    [
    "************************************************",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                          ***    ***      .   *",
    "*                   **                    **   *",
    "*                    *!!!!!!!!!!!!!!!!!!!!*    *",
    "*                    **********************    *",
    "*               o                              *",
    "*          o o ****                          !!*",
    "*         ******                          !!!!!*",
    "*                                        !******",
    "*                                              *",
    "*  o                          o                *",
    "*  *              o          ***         !     *",
    "*                              *         !     *",
    "*              o     o         * o o o o       *",
    "* c                            **********!    c*",
    "****                                     !   ***",
    "*           **         **                !     *",
    "*            *!!!!!!!!!*                       *",
    "*      @     ***********                     o *",
    "*                                        !  ****",
    "*                                              *",
    "*                                        !     *",
    "*      *                             o o !     *",
    "*                                   *****!     *",
    "*                           c                  *",
    "*  **     **         *     ***           !     *",
    "*   *!!!!!*                           !  !!    *",
    "*xxx*!!!!!*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "************************************************"],

[
    "************************************************",
    "*                        . *                   *",
    "*                        ***                   *",
    "*                  333                         *",
    "*                                              *",
    "*        **     **          c      o o o o     *",
    "*    o    *!!!!!*          ***    *********    *",
    "*    *    *******            *!!!!*       *    *",
    "*                            ******       *  1 *",
    "* o o                                     *    *",
    "*****                o                    *    *",
    "*   * o              *                    *1   *",
    "*   ***                                   *    *",
    "*              o                          *    *",
    "*              *                          *  1 *",
    "* o      o                                *    *",
    "*****   **                                *    *",
    "*   *!!!*                                 *1   *",
    "*   *****                                      *",
    "*                                         c    *",
    "*                                         ******",
    "*                                              *",
    "*                                   444        *",
    "*                                              *",
    "*                                              *",
    "*                          o o o o             *",
    "*                         *********            *",
    "*      o      8                                *",
    "*      *                                       *",
    "*     **!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "* @  ***!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "************************************************"],

    [
    "************************************************",
    "*                                              *",
    "*                                              *",
    "*                o o o o o o o        4        *",
    "*                                              *",
    "*                                              *",
    "*            * e  e   e   e   e  *            .*",
    "*            *********************            **",
    "*                                              *",
    "*        c                                     *",
    "*        *                                     *",
    "*                                              *",
    "*                                              *",
    "*     o                                        *",
    "*     *                                        *",
    "*!!!!!*          o    o    o                   *",
    "*******           7                o           *",
    "*       **                        **           *",
    "*        *!!!!!!!!!!!!!!!!!!!!!!!!*            *",
    "*        **************************            *",
    "*                                     e   e  c *",
    "*                                     **********",
    "*                                    **        *",
    "*    @                                         *",
    "*                                              *",
    "*                                 o            *",
    "*                                ***           *",
    "*    *                                         *",
    "*                                              *",
    "*      *                                       *",
    "*!!!!!!*       e   e   e   e          e   e    *",
    "************************************************"],

    [
    "************************************************",
    "*!!!!*                   *                     *",
    "***!*                    *                     *",
    "*  !    * o  o eo  eo  o.*                     *",
    "*  !    ******************                     *",
    "*  !    *                *                     *",
    "*5      *!!!!!!!!!!!!!!!!*                     *",
    "*  !    *!!!!!!!!!!!!!!!!*                     *",
    "*       *!!!!!!!!!!!!!!!!*                     *",
    "*       ******************                     *",
    "* 3                                            *",
    "*                                              *",
    "*                                              *",
    "*5                                           !!*",
    "*  !   o                                 !!!!!!*",
    "*      i        o                        !******",
    "* c             i       o                      *",
    "***!                    i       o      o   o   *",
    "*  !                            i        !     *",
    "*  !                                  o  !     *",
    "*                                     *  !     *",
    "*  !                                     !    c*",
    "*  !                                     !    **",
    "*                                              *",
    "*  ! o                              6          *",
    "*!!!!*                                   !   o *",
    "******                                   !   ***",
    "*              o       o       o         !     *",
    "*              i       i       i         !     *",
    "*      **                               !!! !  *",
    "*   @  *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "************************************************"],

    [
    "************************************************",
    "*                                              *",
    "*                          o                   *",
    "*                                              *",
    "*                  *!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "*                  *****************************",
    "*                      D2    D2 D2 D2     D2   *",
    "*                                              *",
    "*                  c      U2          U2     . *",
    "*           *      *****************************",
    "*           *!!!!!!*                           *",
    "*         ii********                           *",
    "*  3                                           *",
    "*5                                             *",
    "* 4                                            *",
    "*          o                                   *",
    "*                                              *",
    "*        o   c                                 *",
    "*        *   *                                 *",
    "*        *!!!*    o                            *",
    "*        *****    i      o                     *",
    "*                        i       o             *",
    "*    @                           i       o     *",
    "*                                        *     *",
    "*                                              *",
    "*                                              *",
    "*    i     3                                  c*",
    "*                                 333         **",
    "*                                              *",
    "*                  *         *                 *",
    "*!!!!!!!!!!!!!!!!!!*e      e *!!!!!!!!!!!!!!!!!*",
    "************************************************"],

    [
    "************************************************",
    "*    *           D3     D3 3 8 1               *",
    "*                          7 3 5               *",
    "*                          5 5 2               *",
    "* .  *  e   e  *     U2    6 2 7               *",
    "****************!!!!*********************      *",
    "*              ******                     3    *",
    "*                              D8 o            *",
    "*                            D6   *            *",
    "*                           9   D6          c  *",
    "*                             D5            ****",
    "*                **    **           U2         *",
    "*               * *!!!!*               *       *",
    "*                 ******                       *",
    "*  c                                           *",
    "****                           o oU9           *",
    "*        999999        3      ******           *",
    "*                                              *",
    "*                                      c       *",
    "*                                              *",
    "*                                      i       *",
    "*                                              *",
    "*                            D5                *",
    "*           D2       D1                      o *",
    "*          o o o o o o o o o o               ***",
    "*                U2      U3                    *",
    "*       **iiiiiiiiiiiiiiiiiii       6          *",
    "*      *                                       *",
    "*     *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "*    *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "* @ *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "************************************************"],

    /*
    [
    "************************************************",
    "*@      D3                       D2       D3   *",
    "*  o  D4                   D2                  *",
    "*i***     U2                                   *",
    "*                 *   999U3   8U2    9         *",
    "*        o       **!!!!!!!!!!!!!!!!!!!!!!!!!!* *",
    "*        i        **************************** *",
    "*                                            * *",
    "*            o                                 *",
    "*            i                                 *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*                                              *",
    "*             !!!!                             *",
    "*             ! .                              *",
    "*             !***             o               *",
    "*!!!!!!!!!!!!!!!!!!!           i               *",
    "*                     9                        *",
    "*                                      o       *",
    "*        ****    3                      i     c*",
    "*                             o                *",
    "*                             i                *",
    "*                          c                  i*",
    "*     i         i         ***                 o*",
    "*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*",
    "************************************************"],
    */
    [
    "************************************************",
    "*                                               *",
    "*                                               *",
    "*                                               *",
    "*                                               *",
    "*                                            xx*",
    "*   o o o o o o o o o o o o o o o o o o o o o x.*",
    "*  **********************************************",
    "*                                               *",
    "*                                               *",
    "* o o o o o o o o o o o o o o o o o o o o o o   *",
    "**********************************************  *",
    "*                                               *",
    "*                                               *",
    "*   o o o o o o o o o o o o o o o o o o o o o o *",
    "*  **********************************************",
    "*                                               *",
    "*                                               *",
    "* o o o o o o o o o o o o o o o o o o o o o o   *",
    "**********************************************  *",
    "*                                               *",
    "*                                               *",
    "*   o o o o o o o o o o o o o o o o o o o o o o *",
    "*  **********************************************",
    "*                                               *",
    "*                                               *",
    "* o o o o o o o o o o o o o o o o o o o o o o   *",
    "**********************************************  *",
    "*                                               *",
    "*                                               *",
    "* @ o o o o o o o o o o o o o o o o o o o o o o *",
    "************************************************"]];

//The current level
var currentLevel = levels[0].slice();
var levelNumber = 0;
var texts = [
    ["The mind is not simple.", 1, 8, 25, false],
    ["It is made of billions of nerve endings", 1, 8, 26, false],
    ["The mind can become stronger through exercise.", 2, 14, 20, false],
    ["The brain can process data in an instant", 3, 12, 20, false],
    ["Like all of this", 3, 36, 10, false],
    ["Nice", 3, 1.5, 15, false],
    ["The brain is connected to the body, This allows reactions.", 3, 4, 8, false],
    ["This is called the nervous system", 3, 8, 9, false],
    ["But the brain is not perfect", 4, 5, 18, false],
    ["It will make mistakes", 4, 26, 18, false],
    ["And can get mental diseases", 4, 28, 9, false],
    ["Like OCD", 4, 6, 9, false],
    ["The brain uses electrochemical signals", 5, 10, 24, false],
    ["These can be sent over long disances", 5, 10.2, 25, false],
    ["The main part of the brain is the:", 5, 20, 10, false],
    ["cerebral cortex", 5, 25, 11, false],
    ["This controls", 5, 12, 2, false],
    ["actions", 5, 13, 3, false],
    ["and thought", 5, 28, 2, false],
    ["stress", 6, 9, 24, false],
    ["anxiety", 6, 14, 24, false],
    ["depression", 6, 19, 24, false],
    ["People may be affected by these", 6, 22, 20, false],
    ["mental health issues at some point", 6, 22, 21, false],
    ["but in more serious cases", 6, 30, 3, false],
    ["autism", 6, 20, 9, false],
    ["ADHD", 6, 14.5, 12, false],
    ["Alzheimer's", 6, 6, 14, false],
    ["But psychological therapy", 6, 10, 2, false],
    ["can help", 6, 14, 3, false],
    ["But what makes us different from animals?", 7, 9, 28, false],
    ["We have morality", 7, 28, 24, false],
    ["We can self recognise", 7, 34, 15, false],
    ["Animals do not have human-like love", 7, 18, 2, false],
    ["We can question life", 7, 2, 5, false],
    ["Man can change the balance of harmony", 7, 10, 13, false],
    ["rather than just stay in homostasis", 7, 10, 14, false],
    ["But we need to take care of the mind through:", 8, 12, 26, false],
    ["Reading", 8, 43, 19, false],
    ["Exercise", 8, 30, 16, false],
    ["Talking", 8, 23, 15, false],
    ["Meditating", 8, 15, 14, false],
    ["Writing", 8, 2, 9, false],
    ["Having me time", 8, 12, 2, false],
    ["The cerebrum is divided into 4 lobes", 9, 14, 25, false],
    ["Frontal lobe", 9, 30, 18, false],
    ["Parietal lobe", 9, 16, 17, false],
    ["Occipital lobe", 9, 2, 10, false],
    ["Temporal lobe", 9, 11, 7, false],
    ["The brain is an amazing thing", 10, 12, 22, false],
    ["And your brain is amazing", 10, 2, 11, false],
    ["Because you win", 10, 8, 2, false],
    ["You win", 11, 3, 29, false],
    ["Made by cameron bell", 11, 15, 29, false],
    ["okay", 11, 32, 29, false],
    ["we get it", 11, 40, 29, false],
    ["You are cool", 11, 32, 25, false],
    ["You can leave now", 11, 18, 25, false],
    ["wow", 11, 9, 25, false],
    ["nice", 11, 9, 21, false],
    ["keep it up man", 11, 18, 21, false],
    ["proud of you", 11, 27, 21, false],
    ["but can you leave now", 11, 9, 17, false],
    ["writing this text is annoying", 11, 27, 17, false],
    ["OMG you won okay, good job. Now close the tab", 11, 9, 13, false],
    ["Play testing by Apalak. Everything by Cameron Bell", 11, 9,9, false],
    ["I told you not to.", 11, 9,5, false],
    ["rebel", 11, 23,5, false],
    ["I dont like you", 11, 32,5, false],
];


//Animation frame
(function()
{
    //Check if anomation request frame has not been set
    if (!window.requestAnimationFrame)
    {
        //Set it reagerdless of browser
        window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||

        //Set framerate 60
        function(callback, element)
        {
            window.setTimeout(callback, 1000 / FRAME_RATE);
        }
    }
})();

//Print messgae
console.log("Created animation frame requester");

//Find the current frames that have passed
function timestamp()
{
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

//Like mathf.clamp, but for javascript
function bound(x, min, max)
{
    return Math.max(min, Math.min(max, x));
}


//Constant values
const TILE = 16; //The pixel size of each tile
const METER = TILE; //One in game meter or tile
const LEVEL_WIDTH = 48; //The level width in meters
const LEVEL_HEIGHT = 32; //The level height in meters
const GRAVITY = 0.4; //An exaggerated form of gravity

const HORIZONTAL_MAX = 15;
const VERTICAL_MAX = 60;

const FRAME_RATE = 60;
const STEP = 1 / FRAME_RATE;

const JUMP_POWER = 8; //A huge jump upward
const ACCELERATION = 1; //Smoothly speed up
const FRICTION = 0.8; //Smoothly slows down

const KEY_UP = 38; //The up arrow
const KEY_LEFT = 37; //Left arrow
const KEY_SPACE = 32; //Space bar
const KEY_RIGHT = 39; //Right arrow
const KEY_Q = 81; //For cheaters

const BACKGROUND_COLOUR = '#FFF'; //Back colour of window

//Setup the game canvas
var canvas = document.getElementById("Window");
var context = canvas.getContext("2d");

var width = canvas.width = LEVEL_WIDTH * TILE;
var height = canvas.height = LEVEL_HEIGHT * TILE;

//How many coins the player has collected
var score = 0;
var startingScore = 0;
var maxScore = 1;

//General functions
var t2p      = function(t)     { return t*TILE;                  },
    p2t      = function(p)     { return Math.floor(p/TILE);      },
    cell     = function(x,y)   { return tcell(p2t(x),p2t(y));    },
    tcell    = function(tx,ty) { return cells[tx + (ty*MAP.tw)]; };

//Print messgae
console.log("Successfully started the game");
var currentDeaths = -1;

//The player object has these properties
var player =
{
    grounded: false, //Wheather or not the player is actually touching the ground
    jumping: false, //Simply wheraather or not the player is currently jumping
    y: height / 2, //The Y pos of the player, stating at the center
    x: width / 2, //The X pos of the player, starting at the center
    velocityX: 0, //The instantanious speed on the X axis
    velocityY: 0, //The instantanious speed on the Y axis
    colour: '#333', //THe colour the player is drawn at
    height: TILE, //The pixel height of the player
    width: TILE, //The pixel width of the player
    spawnX: 0, //The x of the spawn point
    spawnY: 0, //The y of the spawn point
    speed: 5, //The player max move speed
};

//Printing
console.log("Created the player");

//Every part of the level is one of these 'objects'
function object()
{
    this.x = 0, //This is the x position in meters
    this.y = 0, //This is the y position in meters

    this.width = TILE, //The width of the block
    this.height = TILE, //The height of the block

    this.colour = 'black' //The block colour
};

//Moving platform
function movingPlatform()
{
    this.x = 0,
    this.y = 0,

    this.width = TILE,
    this.height = TILE,

    this.colour = 'grey',

    this.startX = 0,
    this.startY = 0,

    this.endX = 1,
    this.endY = 1,

    this.dir = 'U',

    this.direction = 1
}

//Entity such as enemy
function entity()
{
    this.x = 0,
    this.y = 0,

    this.velocityY = 0,
    this.grounded = false,

    this.width = TILE,
    this.height = TILE,

    this.direction = 1,
    this.speed = 1
}

function deleter()
{
    this.x = 0, //This is the x position in meters
    this.y = 0, //This is the y position in meters

    this.width = TILE, //The width of the block
    this.height = TILE, //The height of the block

    this.colour = 'white' //The block colour

    this.timer = 0;
}

//This function is used in collision checking
function collide(objectA, objectB)
{
    //Find the collision vectors
    var vectorX = (objectA.x + (objectA.width / 2)) - (objectB.x + (objectB.width / 2));
    var vectorY = (objectA.y + (objectA.height / 2)) - (objectB.y + (objectB.height / 2));

    //Find the distance between the two objects
    var deltaWidth = (objectA.width / 2) + (objectB.width / 2);
    var deltaHeight = (objectA.height / 2) + (objectB.height / 2);

    //Stores the direction of collision
    var collisionDir = null;

    //Check if the two objects are intersecting on the x and y axis
    if(Math.abs(vectorX) < deltaWidth && Math.abs(vectorY) < deltaHeight)
    {
        //The direction of collision
        var directionX = deltaWidth - Math.abs(vectorX);
        var directionY = deltaHeight - Math.abs(vectorY);

        //Check for vertical collision
        if(directionX >= directionY)
        {
            //Check for collisions from the top
            if(vectorY > 0)
            {
                objectA.y += directionY;
                collisionDir = "t";
            }

            //Collisions form the botttom
            else
            {
                objectA.y -= directionY;
                collisionDir = "b";
            }
        }
        else
        {
            //Check for collisions from the left
            if(vectorX > 0)
            {
                objectA.x += directionX;
                collisionDir = "l";
            }

            //Collisions form the right side
            else
            {
                objectA.x -= directionX;
                collisionDir = "r";
            }
        }
    }

    //Return the direction.
    return collisionDir;
}

//This function is used in collision checking
function nonDestructiveCollide(objectA, objectB)
{
    //Find the collision vectors
    var vectorX = (objectA.x + (objectA.width / 2)) - (objectB.x + (objectB.width / 2));
    var vectorY = (objectA.y + (objectA.height / 2)) - (objectB.y + (objectB.height / 2));

    //Find the distance between the two objects
    var deltaWidth = (objectA.width / 2) + (objectB.width / 2);
    var deltaHeight = (objectA.height / 2) + (objectB.height / 2);

    //Stores the direction of collision
    var collisionDir = null;

    //Check if the two objects are intersecting on the x and y axis
    if(Math.abs(vectorX) < deltaWidth && Math.abs(vectorY) < deltaHeight)
    {
        //The direction of collision
        var directionX = deltaWidth - Math.abs(vectorX);
        var directionY = deltaHeight - Math.abs(vectorY);

        //Check for vertical collision
        if(directionX >= directionY)
        {
            //Check for collisions from the top
            if(vectorY > 0) collisionDir = "t";

            //Collisions form the botttom
            else collisionDir = "b";
        }
        else
        {
            //Check for collisions from the left
            if(vectorX > 0) collisionDir = "l";

            //Collisions form the right side
            else collisionDir = "r";
        }
    }

    //Return the direction.
    return collisionDir;
}


function quickCollision(objectA, objectB)
{
    var returnVal = false;

    if (objectA.x < objectB.x + objectB.width &&
    objectA.x + objectA.width > objectB.x &&
    objectA.y < objectB.y + objectB.height &&
    objectA.height + objectA.y > objectB.y)
    {
        returnVal = true;
    }

    return returnVal;
}

function textCollision(objectA, text, x, y)
{
    var returnVal = false;

    var textWidth = context.measureText(text).width;
    if(levelNumber != (levels.length - 1)) var textHeight = 6 * TILE;
    else var textHeight = 2 * TILE;

    var aHeight = objectA.height;

    if (objectA.x < x + textWidth &&
    objectA.x + objectA.width > x &&
    objectA.y < y + textHeight &&
    aHeight + objectA.y > y)
    {
        returnVal = true;
    }

    return returnVal;
}

context.font = "11pt Courier New";

//All the types of'objects' in the level
var Removers = [];
var RemoversClone = [];
var Movers = [];
var Finnish = null;
var Checkpoints = [];
var Walls = [];
var Coins = [];
var Deads = [];
var Lava = [];
var Enemys = [];
var EnemysClone = [];
var MovingLava = [];

//Load the level file
function loadLevel()
{
    MovingLava = [];
    Removers = [];
    EnemysClone = [];
    Enemys = [];
    Movers = [];
    Checkpoints = [];
    Finnish = [];
    Walls = [];
    Coins = [];
    Deads = [];
    Lava = [];

    score = 0;

    console.log("Level file loaded as follows: ");

    var moveNext = null;
    for(var y = 0; y < levels[levelNumber].length; y++)
    {
        for(var x = 0; x < levels[levelNumber][y].length; x++)
        {
            var char = levels[levelNumber][y].charAt(x);
            var current = x * y;

            if(moveNext != null)
            {
                var temp = new movingPlatform();
                temp.x = x * TILE;
                temp.y = y * TILE;
                temp.width = TILE;
                temp.height = TILE;

                temp.colour = 'orange';

                temp.startX = x * TILE;
                temp.startY = y * TILE;

                if(moveNext == 'D')
                {
                    temp.endX = x * TILE;
                    temp.endY = y * TILE + parseInt(char) * TILE;
                    temp.direction = 1;
                    temp.dir = 'D';
                }

                if(moveNext == 'U')
                {
                    temp.endX = x * TILE;
                    temp.endY = y * TILE - parseInt(char) * TILE;
                    temp.direction = -1;
                    temp.dir = 'U';
                }

                MovingLava.push(temp);

                moveNext = null;
                continue;
            }

            if(char === "*")
            {
                var temp = new object();
                temp.x = x * TILE;
                temp.y = y * TILE;
                temp.width = TILE;
                temp.height = TILE;
                temp.colour = '#555';

                Walls.push(temp);
            }

            else if(char === "!")
            {
                var temp = new object();
                temp.x = x * TILE;
                temp.y = y * TILE;
                temp.width = TILE;
                temp.height = TILE;
                temp.colour = '#F66';

                Lava.push(temp);
            }

            else if(char === "o")
            {
                var temp = new object();
                temp.x = x * TILE + 3;
                temp.y = y * TILE - 3;
                temp.width = 12;
                temp.height = 12;
                temp.colour = '#FF4';

                Coins.push(temp);
            }

            else if(char === "x")
            {
                var temp = new object();
                temp.x = x * TILE;
                temp.y = y * TILE;
                temp.width = TILE;
                temp.height = TILE;

                Deads.push(temp);
            }

            else if(!isNaN(char) && char != ' ')
            {
                var temp = new movingPlatform();
                temp.x = x * TILE;
                temp.y = y * TILE;
                temp.width = TILE;
                temp.height = TILE;

                temp.colour = '#88F';

                temp.startX = temp.x;
                temp.startY = temp.y;
                temp.endX = temp.x + parseInt(char) * TILE;
                temp.endY = temp.y;

                Movers.push(temp);
            }

            else if(char === "e")
            {
                var temp = new entity();

                temp.x = x * TILE;
                temp.y = y * TILE;
                temp.width = TILE;
                temp.height = TILE;

                temp.colour = 'brown';

                temp.direction = 1;
                temp.speed = 2;

                Enemys.push(temp);
            }

            else if (char === "i")
            {
                var temp = new deleter();

                temp.x = x * TILE;
                temp.y = y * TILE;
                temp.width = TILE;
                temp.height = TILE;
                temp.timer = 0;

                temp.colour = '#B2D'

                Removers.push(temp);
            }

            else if(char === "c")
            {
                var temp = new object();
                temp.x = x * TILE;
                temp.y = y * TILE;
                temp.width = TILE;
                temp.height = TILE;
                temp.colour = '#F2F';

                Checkpoints.push(temp);
            }

            else if(char === "U" || char === "D" || char === "L" || char === "R")
            {
                moveNext = char;
            }

            else if(char === "@")
            {
                player.spawnX = x * TILE;
                player.spawnY = y * TILE;
            }

            else if(char === ".")
            {
                Finnish = new object();
                Finnish.x = x * TILE;
                Finnish.y = y * TILE;
                Finnish.with = TILE;
                Finnish.height = TILE;
                Finnish.colour = '#6F6';
            }
        }
    }

    //Print messgae
    console.log("Generated the level");
    EnemysClone = Enemys.slice(0);
    RemoversClone = Removers.slice(0);
    maxScore = Coins.length;

    //Create a copy of the coins for the respawning code
    var initialCoins = Coins.slice();
}

//Actually call the function
loadLevel();

//Create key input array
var keys = [];

//Create key down input function
function setKeyDown(current)
{
    //Only check for input if the game is the target.
    if(current.target == document.body)
    {
        //Stop default inputs.
        current.preventDefault();

        //Set the array value to true
        keys[current.keyCode] = true;
    }
}

//Create key up input function
function setKeyUp(current)
{
    //Delete the array value
    delete keys[current.keyCode];
}

//Create input listener
window.addEventListener("keydown", setKeyDown, false);
window.addEventListener("keyup", setKeyUp, false);
window.addEventListener("load", game);

/*
myAudio = new Audio('music.mp3');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();
*/

//Print messgae
console.log("Setup input event listeners");

//Respawns the player at the starting pos
function respawn()
{
    //Use the player spawn position
    player.velocityX = 0;
    player.velocityY = 0;

    player.x = player.spawnX;
    player.y = player.spawnY;

    //Reset enemys
    Enemys = EnemysClone.slice(0);
    Removers = RemoversClone.slice(0);

    for(var i = 0; i < Removers.length; i++)
    {
        Removers[i].timer = 0;
    }

    currentDeaths++;
    if (typeof deaths !== 'undefined') deaths.innerHTML = "You have: "+ currentDeaths + " deaths. And you are  on level: " + levelNumber + "/10";

    //Print message
    console.log("Player died. Respawning");
}

function nextLevel()
{
    if(levelNumber < levels.length - 1)
    {
        currentLevel.length = 0;
        levelNumber++;
        currentDeaths--;
        currentLevel = levels[levelNumber].slice();
        loadLevel();
        console.log("Level completed");
        respawn();
    }
}

//Call it once, when the game begins
respawn();

//Update player pos
function update()
{
    //Check for both jump buttons.
    if(keys[KEY_UP] || keys[KEY_SPACE])
    {
        //Check that this player is not currently jumping and is on the ground.
        if(!player.jumping && player.grounded)
        {
            //Set jumping true, and add to the y velocity
            player.velocityY = -JUMP_POWER;
            player.grounded = false;
            player.jumping = true;
        }
    }

    //Check left arrow input and the player is not max speed
    if(keys[KEY_LEFT] && player.velocityX > -player.speed)
    {
        player.velocityX -= ACCELERATION;
    }

    //Check right arrow input and the player is not max speed
    if(keys[KEY_RIGHT] && player.velocityX < player.speed)
    {
        player.velocityX += ACCELERATION;
    }

    //Apply the force of friction on the x-axis
    player.velocityX *= FRICTION;
    player.velocityY += GRAVITY;

    //Actually apply the velocity
    player.y += player.velocityY;
    player.x += player.velocityX;
}

function render()
{
    //Clear previous frame.
    context.clearRect(0, 0, width, height);

    context.fillStyle = BACKGROUND_COLOUR;
    context.fillRect(0, 0, width, height);

    //Assume the player is not grounded unless there is a collision
    player.grounded = false;

    //Draw walls
    for(var i = 0; i < Walls.length; i++)
    {
        //Get collision from the boxes
        var direction = collide(player, Walls[i]);

        //Find the direction of collision
        if(direction === "l" || direction === "r")
        {
            player.velocityX = 0;
            player.jumping = false;
        }

        //Find different vertical collision
        else if(direction === "b")
        {
            player.grounded = true;
            player.velocityY = 0;
            player.jumping = false;
        }

        //Collision from the top
        else if(direction === "t")
        {
            player.velocityY = 0;
        }

        //Draw the boxes
        context.fillStyle = Walls[i].colour;
        context.fillRect(Walls[i].x, Walls[i].y, Walls[i].width, Walls[i].height);
    }

    //loop through the coins
    for(var i = 0; i < Coins.length; i++)
    {
        //Draw the coins
        context.fillStyle = Coins[i].colour;
        context.fillRect(Coins[i].x, Coins[i].y, Coins[i].width, Coins[i].height);

        //On collision increase score and destroy coin
        if(collide(player, Coins[i]) != null)
        {
            //Increase score
            score++;

            //Destroy coin
            Coins.splice(i, 1);

            //Make sure to draw the other coins correctly
            if(i != 0) i--;
        }
    }

    //Draw all lava
    for(var i = 0; i < Lava.length; i++)
    {
        //Check for collision, if so respawn
        if(collide(player, Lava[i]) != null) respawn();

        //Draw the lava tiles
        context.fillStyle = Lava[i].colour;
        context.fillRect(Lava[i].x, Lava[i].y, Lava[i].width, Lava[i].height);
    }

    //Check for collision withs deads
    for(var i = 0; i < Deads.length; i++)
    {
        if(collide(player, Deads[i]) != null) respawn();
    }

    //Draw the max score in the top left corener
    if(levelNumber != (levels.length - 1))
    {
        for(var i = 0; i < maxScore; i++)
        {
            var line = Math.floor(i / 8);

            context.fillStyle = 'grey';
            context.fillRect(TILE * 2 + TILE * i - (line * TILE * 8), TILE * 2 + line * TILE, 6, 6);
        }
    }

    //Draw the checkpoints
    for(var i = 0; i < Checkpoints.length; i++)
    {
        //Check for collision
        if(quickCollision(player, Checkpoints[i]))
        {
            Checkpoints[i].colour = '#FAF';
            startingScore = score;

            player.spawnX = Checkpoints[i].x;
            player.spawnY = Checkpoints[i].y;
        }

        //Draw
        context.fillStyle = Checkpoints[i].colour;
        context.fillRect(Checkpoints[i].x, Checkpoints[i].y, Checkpoints[i].width, Checkpoints[i].height);
    }

    for(var i = 0; i < Movers.length; i++)
    {
        if(Movers[i].x >= Movers[i].endX)
        {
            Movers[i].direction = -1;
        }

        if(Movers[i].x <= Movers[i].startX)
        {
            Movers[i].direction = 1;
        }

        Movers[i].x += Movers[i].direction;

        //Get collision from the boxes
        var direction = collide(player, Movers[i]);

        //Find the direction of collision
        if(direction === "l" || direction === "r")
        {
            player.velocityX = 0;
            player.jumping = false;
        }

        //Find different vertical collision
        else if(direction === "b")
        {
            player.grounded = true;
            player.velocityY = 0;
            player.x += Movers[i].direction;
            player.jumping = false;
        }

        //Collision from the top
        else if(direction === "t")
        {
            player.velocityY = 0;
        }

        context.fillStyle = Movers[i].colour;
        context.fillRect(Movers[i].x, Movers[i].y, Movers[i].width, Movers[i].height);
    }

    for(var i = 0; i < MovingLava.length; i++)
    {
        if(MovingLava[i].dir == 'U')
        {
            if(MovingLava[i].y <= MovingLava[i].endY || MovingLava[i].y >= MovingLava[i].startY)
            {
                MovingLava[i].direction *= -1;
            }
        }
        else if (MovingLava[i].dir == 'D')
        {
            if(MovingLava[i].y >= MovingLava[i].endY || MovingLava[i].y <= MovingLava[i].startY)
            {
                MovingLava[i].direction *= -1;
            }
        }

        MovingLava[i].y -= MovingLava[i].direction;

        if(quickCollision(player, MovingLava[i]))
        {
            respawn();
        }

        context.fillStyle = MovingLava[i].colour;
        context.fillRect(MovingLava[i].x, MovingLava[i].y, MovingLava[i].width, MovingLava[i].height);
    }

    if(quickCollision(player, Finnish))
    {
        Finnish.colour = 'green';

        nextLevel();
    }

    for(var i = 0; i < Removers.length; i++)
    {
        context.fillStyle = Removers[i].colour;
        context.fillRect(Removers[i].x, Removers[i].y, Removers[i].width, Removers[i].height);

        //Get collision from the boxes
        var direction = collide(player, Removers[i]);

        //Find the direction of collision
        if(direction === "l" || direction === "r")
        {
            player.velocityX = 0;
            player.jumping = false;
        }

        //Find different vertical collision
        else if(direction === "b")
        {
            player.grounded = true;
            player.velocityY = 0;
            player.jumping = false;

            Removers[i].timer++;
        }

        if(Removers[i].timer > 0)
        {
            Removers.splice(i, 1);
        }

        //Collision from the top
        else if(direction === "t")
        {
            player.velocityY = 0;
        }
    }

    for(var i = 0; i < Enemys.length; i++)
    {
        context.fillStyle = Enemys[i].colour;
        context.fillRect(Enemys[i].x, Enemys[i].y, Enemys[i].width, Enemys[i].height);

        Enemys[i].velocityY += GRAVITY;

        Enemys[i].y += Enemys[i].velocityY;

        Enemys[i].grounded = false;

        for(var j = 0; j < Walls.length; j++)
        {
            var wallCol = collide(Enemys[i], Walls[j]);

            if(wallCol === "l" || wallCol === "r") Enemys[i].direction *= -1;
            if(wallCol === "b")
            {
                Enemys[i].velocityY = 0;
                Enemys[i].grounded = true;
            }
        }

        for(var j = 0; j < Enemys.length; j++)
        {
            if(j == i) continue;

            var selfCol = nonDestructiveCollide(Enemys[i], Enemys[j]);

            if(selfCol === "l" || selfCol === "r")
            {
                Enemys[i].direction *= -1;
                Enemys[j].direction *= -1;
            }

            if (selfCol == "b")
            {
                Enemys[i].velocityY = -JUMP_POWER;
                Enemys[i].grounded = false;
                Enemys.splice(j, 1);
            }
        }

        Enemys[i].x += Enemys[i].direction * Enemys[i].speed

        //Get collision from the boxes
        var direction = nonDestructiveCollide(player, Enemys[i]);

        //Find the direction of collision
        if(direction === "l" || direction === "r") respawn();

        //Collision from the top
        else if(direction === "b")
        {
            Enemys.splice(i, 1);

            //Set jumping true, and add to the y velocity
            player.velocityY = -JUMP_POWER;
            player.grounded = false;
            player.jumping = true;
        }

        for(var k = 0; k < Lava.length; k++)
        {
            if(quickCollision(Enemys[i], Lava[k])) Enemys.splice(i, 1);
        }
    }

    //Draw
    context.fillStyle = Finnish.colour;
    context.fillRect(Finnish.x, Finnish.y, Finnish.width, Finnish.height);

    //Draw the score in the top left corener of the screen
    if(levelNumber != (levels.length - 1))
    {
        for(var i = 0; i < score; i++)
        {
            var line = Math.floor(i / 8);

            context.fillStyle = 'yellow';
            context.fillRect(TILE * 2 + TILE * i - (line * TILE * 8), TILE * 2 + line * TILE, 6, 6);
        }
    }

    //Stop moving when grounded
    if(player.grounded)
    {
        player.velocityY = 0;
    }


    //Draw the text
    for(var i = 0; i < texts.length; i++)
    {
        if(levelNumber == texts[i][1] - 1 && texts[i] !== undefined)
        {
            if(textCollision(player, texts[i][0], texts[i][2] * TILE, texts[i][3] * TILE))
            {
                texts[i][4] = true;
            }

            if(texts[i][4])
            {
                context.fillStyle = 'black';
                context.fillText(texts[i][0],texts[i][2] * TILE,texts[i][3] * TILE);
            }
        }
    }
    //Draw player.
    context.fillStyle = player.colour;
    context.fillRect(player.x, player.y, player.width, player.height);
}

//Called every frame
function game()
{
    var deaths = document.getElementById("deaths");

    //Gets input and calculates
    update();

    //Draws to screen
    render();

    //Repeat the frame
    requestAnimationFrame(game);
}
