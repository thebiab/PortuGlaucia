document.addEventListener("DOMContentLoaded", () => {
    const editAvatarBtn = document.getElementById("edit-avatar-btn");
    const avatarModal = document.getElementById("avatar-modal");
    const confirmAvatarBtn = document.getElementById("confirm-avatar-btn");
    const avatarImages = document.querySelectorAll(".avatar-grid img");
    const currentAvatar = document.getElementById("current-avatar");
    const nicknameInput = document.getElementById("nickname");
    const saveNicknameBtn = document.getElementById("save-nickname-btn");
    const welcomeMessage = document.getElementById("welcome-message");

    let selectedAvatarSrc = currentAvatar.src;

    // Handle avatar selection
    editAvatarBtn.addEventListener("click", () => {
        avatarModal.style.display = "flex";
    });

    avatarImages.forEach(img => {
        img.addEventListener("click", () => {
            selectedAvatarSrc = img.src;
            avatarImages.forEach(i => i.classList.remove("selected"));
            img.classList.add("selected");
        });
    });

    confirmAvatarBtn.addEventListener("click", () => {
        currentAvatar.src = selectedAvatarSrc;
        avatarModal.style.display = "none";
    });

    avatarModal.addEventListener("click", (e) => {
        if (e.target === avatarModal) {
            avatarModal.style.display = "none";
        }
    });

    // Handle nickname save
    saveNicknameBtn.addEventListener("click", () => {
        const nickname = nicknameInput.value.trim();
        if (nickname) {
            localStorage.setItem('nickname', nickname);
            updateWelcomeMessage(nickname);
        }
    });

    // Update welcome message
    function updateWelcomeMessage(nickname) {
        welcomeMessage.textContent = `O QUE VAI JOGAR HOJE, ${nickname}?`;
    }

    // Initialize welcome message if nickname is saved
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
        updateWelcomeMessage(savedNickname);
    }
});
