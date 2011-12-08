/**
 ** No Hot Corner
 ** Disables the hot corner of the activities button in the panel.
 ** Author: Thomas Stephenson<ovangle@gmail.com>
 **/
const Main = imports.ui.main;
const Layout = imports.ui.layout;

const actButton = Main.panel._activitiesButton;

function init(metadata) {
}

function enable() {
    actButton._hotCorner.actor.hide();
}

function disable() {
    actButton._hotCorner.actor.show();        
}
