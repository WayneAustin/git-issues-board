/**
 * Created by wayneaustin on 18/11/2014.
 */
var domManipulation = {
    navItem: "<a href='javascript:void(0)'>Testing</a>",
    initiateGitBoard: function() {
        if(this.detectGitUrl()) {
            this.detectDomObjects();
        }
    },
    detectGitUrl: function() {
        var isGit = true;
        return isGit;
    },
    detectDomObjects: function() {
        var nav = $(".repository-sidebar");
        nav.append(this.navItem);
    }
};

$(document).ready(domManipulation.initiateGitBoard());
