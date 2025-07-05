// Toggle dropdown menu
document.querySelector('.hamburger-menu').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
<script>
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="_znEucvmIXv_dQ81T1ZKN";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
</script>
// Handle send post button
document.querySelector('.send-post-btn').addEventListener('click', function() {
    const postInput = document.querySelector('.post-input');
    if (postInput.value.trim()) {
        alert('Post sent: ' + postInput.value);
        postInput.value = '';
    } else {
        alert('Please write something to post!');
    }
});

// Handle prediction button
document.querySelector('.prediction-btn').addEventListener('click', function() {
    alert('Make your prediction here!');
});