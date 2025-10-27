const slangList = [
    { word: "rizz", meaning: "Smooth charm or ability to attract someone romantically.", tags: ["flirting", "tiktok", "2021"] },
    { word: "cap", meaning: "A lie or something not true.", tags: ["lying", "internet", "slang"] },
    { word: "no cap", meaning: "For real, not lying.", tags: ["truth", "serious", "genz"] },
    { word: "bet", meaning: "Used to say 'okay' or 'deal'.", tags: ["agreement", "casual", "slang"] },
    { word: "yeet", meaning: "To throw something with force or excitement.", tags: ["meme", "funny", "2014+"] },
    { word: "salty", meaning: "Bitter or upset over something small.", tags: ["attitude", "mood", "internet"] },
    { word: "sus", meaning: "Suspicious or sketchy behavior.", tags: ["amongus", "gaming", "internet"] },
    { word: "lit", meaning: "Amazing, exciting, or really fun.", tags: ["party", "fun", "energy"] },
    { word: "slay", meaning: "Doing something really well, with confidence.", tags: ["confidence", "fashion", "winning"] },
    { word: "lowkey", meaning: "Something you want to keep quiet or low profile.", tags: ["secret", "chill", "subtle"] },
    { word: "highkey", meaning: "The opposite of lowkey; very obvious or open.", tags: ["obvious", "loud", "clear"] },
    { word: "vibe", meaning: "The mood, feeling, or atmosphere of something.", tags: ["music", "aura", "genz"] },
    { word: "ghosting", meaning: "Cutting off all communication without explanation.", tags: ["dating", "friendship", "internet"] },
    { word: "simp", meaning: "Someone who does too much for someone they like.", tags: ["love", "dating", "funny"] },
    { word: "stan", meaning: "A super dedicated fan of someone or something.", tags: ["fan", "supporter", "music"] },
    { word: "drip", meaning: "Cool or stylish outfit, usually expensive looking.", tags: ["fashion", "style", "swag"] },
    { word: "flex", meaning: "Showing off, usually money, clothes, or skills.", tags: ["showoff", "brag", "social"] },
    { word: "goat", meaning: "Greatest of all time.", tags: ["sports", "praise", "top"] },
    { word: "bop", meaning: "A really good song.", tags: ["music", "song", "hit"] },
    { word: "extra", meaning: "Over the top, dramatic, or doing too much.", tags: ["drama", "behavior", "funny"] },
    { word: "tea", meaning: "Gossip or news about someone.", tags: ["gossip", "secrets", "spill"] },
    { word: "spill", meaning: "To reveal gossip or secrets.", tags: ["tea", "gossip", "friends"] },
    { word: "shook", meaning: "Shocked or extremely surprised.", tags: ["surprised", "reaction", "internet"] },
    { word: "fire", meaning: "Really good, amazing, or cool.", tags: ["compliment", "music", "style"] },
    { word: "bussin", meaning: "Extremely good, especially for food.", tags: ["food", "tiktok", "compliment"] },
    { word: "ratio", meaning: "Getting more replies/likes than the original tweet or post.", tags: ["twitter", "internet", "clapback"] },
    { word: "main character", meaning: "The person who stands out or feels central to a story.", tags: ["confidence", "selflove", "trend"] },
    { word: "vibe check", meaning: "Testing someone’s mood or energy.", tags: ["funny", "friends", "trend"] },
    { word: "pressed", meaning: "Annoyed or upset about something small.", tags: ["attitude", "anger", "mood"] },
    { word: "glow up", meaning: "A big transformation in looks or confidence.", tags: ["style", "selfcare", "beauty"] },
    { word: "mood", meaning: "Something very relatable.", tags: ["relatable", "internet", "reaction"] },
    { word: "chill", meaning: "Relaxed or easy-going attitude.", tags: ["relax", "casual", "genz"] },
    { word: "ok boomer", meaning: "Dismissive response to an older person’s outdated opinion.", tags: ["meme", "internet", "slang"] },
    { word: "periodt", meaning: "Used to end a statement with emphasis.", tags: ["final", "sass", "confidence"] },
    { word: "woke", meaning: "Aware of social and political issues.", tags: ["politics", "awareness", "genz"] },
    { word: "cancelled", meaning: "When someone is boycotted for bad behavior.", tags: ["internet", "drama", "social"] },
    { word: "ship", meaning: "Wanting two people to be in a relationship.", tags: ["romance", "fandom", "internet"] },
    { word: "finesse", meaning: "To skillfully trick or handle a situation smoothly.", tags: ["skills", "trick", "street"] },
    { word: "savage", meaning: "Bold or brutally honest behavior.", tags: ["roast", "fearless", "internet"] },
    { word: "clout", meaning: "Fame, influence, or popularity online.", tags: ["fame", "internet", "influencer"] },
    { word: "dead", meaning: "Used when something is really funny.", tags: ["laughing", "reaction", "slang"] },
    { word: "slaps", meaning: "Used to describe a really good song or beat.", tags: ["music", "song", "compliment"] },
    { word: "snatched", meaning: "Looking really good, usually about style.", tags: ["style", "beauty", "compliment"] },
    { word: "receipts", meaning: "Proof or evidence of something said or done.", tags: ["evidence", "internet", "proof"] },
    { word: "hits different", meaning: "Something feels unique or extra special.", tags: ["music", "vibe", "genz"] },
    { word: "valid", meaning: "Something cool, acceptable, or impressive.", tags: ["approval", "cool", "praise"] },
    { word: "based", meaning: "Being true to yourself and not caring what others think.", tags: ["confidence", "internet", "slang"] },
    { word: "dub", meaning: "A win or success.", tags: ["victory", "sports", "success"] },
    { word: "L", meaning: "A loss or failure.", tags: ["fail", "gaming", "internet"] },
    { word: "W", meaning: "A win or good thing.", tags: ["victory", "gaming", "praise"] },
    { word: "Faiq", meaning: "KUTTA.", tags: ["DOGGIE", "BARK"] },
    { word: "Musfira", meaning: "MOTI.", tags: ["COW", "HIPPO"] },
    { word: "idk", meaning: "I don’t know.", tags: ["chat", "texting", "abbreviation"] },
    { word: "smth", meaning: "Something.", tags: ["shortform", "casual", "texting"] },
    { word: "omg", meaning: "Oh my God.", tags: ["reaction", "surprise", "internet"] },
    { word: "brb", meaning: "Be right back.", tags: ["chat", "away", "internet"] },
    { word: "btw", meaning: "By the way.", tags: ["casual", "info", "texting"] },
    { word: "lol", meaning: "Laugh out loud.", tags: ["funny", "reaction", "internet"] },
    { word: "lmao", meaning: "Laughing my ass off.", tags: ["funny", "internet", "reaction"] },
    { word: "rofl", meaning: "Rolling on the floor laughing.", tags: ["funny", "reaction", "oldschool"] },
    { word: "imo", meaning: "In my opinion.", tags: ["opinion", "chat", "casual"] },
    { word: "imho", meaning: "In my humble opinion.", tags: ["opinion", "casual", "texting"] },
    { word: "tbh", meaning: "To be honest.", tags: ["honesty", "chat", "casual"] },
    { word: "rn", meaning: "Right now.", tags: ["time", "chat", "casual"] },
    { word: "atm", meaning: "At the moment.", tags: ["time", "casual", "chat"] },
    { word: "ikr", meaning: "I know, right?", tags: ["agreement", "chat", "internet"] },
    { word: "afk", meaning: "Away from keyboard.", tags: ["gaming", "chat", "status"] },
    { word: "gg", meaning: "Good game.", tags: ["gaming", "sports", "casual"] },
    { word: "glhf", meaning: "Good luck, have fun.", tags: ["gaming", "positive", "internet"] },
    { word: "wp", meaning: "Well played.", tags: ["gaming", "praise", "casual"] },
    { word: "irl", meaning: "In real life.", tags: ["internet", "reality", "chat"] },
    { word: "dm", meaning: "Direct message.", tags: ["socialmedia", "chat", "internet"] },
    { word: "pm", meaning: "Private message.", tags: ["chat", "internet", "social"] },
    { word: "ggwp", meaning: "Good game, well played.", tags: ["gaming", "sports", "internet"] },
    { word: "idc", meaning: "I don’t care.", tags: ["attitude", "chat", "casual"] },
    { word: "wyd", meaning: "What you doing?", tags: ["chat", "casual", "shortform"] },
    { word: "wym", meaning: "What you mean?", tags: ["chat", "confused", "casual"] },
    { word: "hmu", meaning: "Hit me up (contact me).", tags: ["casual", "chat", "friends"] },
    { word: "nvm", meaning: "Never mind.", tags: ["chat", "casual", "internet"] },
    { word: "fr", meaning: "For real.", tags: ["truth", "agreement", "casual"] },
    { word: "ngl", meaning: "Not gonna lie.", tags: ["honesty", "chat", "casual"] },
    { word: "thx", meaning: "Thanks.", tags: ["chat", "casual", "shortform"] },
    { word: "ty", meaning: "Thank you.", tags: ["chat", "shortform", "casual"] },
    { word: "yw", meaning: "You’re welcome.", tags: ["reply", "casual", "chat"] },
    { word: "bff", meaning: "Best friends forever.", tags: ["friendship", "internet", "casual"] },
    { word: "bae", meaning: "Before anyone else (romantic partner).", tags: ["love", "dating", "casual"] },
    { word: "jk", meaning: "Just kidding.", tags: ["funny", "casual", "chat"] },
    { word: "tfw", meaning: "That feeling when.", tags: ["meme", "internet", "reaction"] },
    { word: "fyi", meaning: "For your information.", tags: ["info", "chat", "shortform"] },
    { word: "smh", meaning: "Shaking my head (disappointment).", tags: ["reaction", "chat", "internet"] },
    { word: "rn", meaning: "Right now.", tags: ["time", "chat", "casual"] },
    { word: "wydt", meaning: "What you doing tonight?", tags: ["chat", "casual", "friends"] },
    { word: "g2g", meaning: "Got to go.", tags: ["leaving", "chat", "casual"] },
    { word: "omw", meaning: "On my way.", tags: ["time", "chat", "shortform"] },
    { word: "afaik", meaning: "As far as I know.", tags: ["info", "chat", "internet"] },
    { word: "irl", meaning: "In real life.", tags: ["internet", "chat", "casual"] },
    { word: "fomo", meaning: "Fear of missing out.", tags: ["internet", "social", "slang"] },
    { word: "wtf", meaning: "What the f***.", tags: ["reaction", "chat", "internet"] },
    { word: "wyd?", meaning: "What are you doing?", tags: ["chat", "casual", "friends"] },
    { word: "sup", meaning: "What’s up?", tags: ["greeting", "casual", "chat"] },
    { word: "idts", meaning: "I don’t think so.", tags: ["chat", "casual", "shortform"] },
    { word: "gooning", meaning: "Being zoned out, fixated, or in a trance-like state, often from scrolling online or binge-watching.", tags: ["internet", "slang", "genz"] },
    { word: "type beat", meaning: "Used to describe a vibe or aesthetic, often borrowed from music culture.", tags: ["music", "vibe", "phrases"] },
    { word: "ate", meaning: "Slang for doing something really well; crushed it.", tags: ["compliment", "trend", "genz"] },
    { word: "be so for real", meaning: "Telling someone to stop joking or exaggerating; be serious.", tags: ["chat", "phrases", "genz"] },
    { word: "delulu", meaning: "Short for delusional; used when someone is overly optimistic or out of touch.", tags: ["funny", "internet", "genz"] },
    { word: "npc", meaning: "Calling someone boring, predictable, or acting robotic like a video game NPC.", tags: ["gaming", "insult", "genz"] },
    { word: "silent W", meaning: "A subtle win or achievement that isn’t flashy.", tags: ["victory", "phrases", "genz"] },
    { word: "aura", meaning: "Used to describe someone’s vibe, energy, or presence.", tags: ["vibe", "casual", "genz"] },
    { word: "caught in 4k", meaning: "Exposed with clear evidence, usually in a funny or embarrassing way.", tags: ["internet", "funny", "proof"] },
    { word: "gyatt", meaning: "Exclamation of surprise or admiration, often about appearance.", tags: ["reaction", "internet", "casual"] },
    { word: "beige flag", meaning: "Something odd or quirky about someone, but not a total dealbreaker.", tags: ["dating", "funny", "trend"] },
    { word: "core", meaning: "A suffix used to describe an aesthetic (e.g., cottagecore, dreamcore).", tags: ["aesthetic", "trend", "internet"] },
    { word: "lagging", meaning: "Used outside gaming to mean someone is slow or not keeping up.", tags: ["gaming", "casual", "genz"] },
    { word: "main character energy", meaning: "Confidence and self-assuredness, like you’re the star of your own life.", tags: ["confidence", "selflove", "trend"] },
    { word: "cheugy", meaning: "Out of date or trying too hard to be trendy.", tags: ["fashion", "trend", "internet"] },
    { word: "hits different", meaning: "Something that feels unique or extra special.", tags: ["music", "vibe", "genz"] },
    { word: "snacc", meaning: "An attractive person, like a snack you want to eat.", tags: ["attraction", "funny", "internet"] },
    { word: "sksksk", meaning: "An expression of excitement or laughter, often used in text.", tags: ["funny", "internet", "reaction"] },
    { word: "and I oop", meaning: "A phrase used when something surprising or awkward happens.", tags: ["funny", "reaction", "internet"] },
    { word: "fit", meaning: "Short for outfit; refers to what someone is wearing.", tags: ["fashion", "style", "casual"] },
    { word: "pov", meaning: "Point of view; used to describe a scenario from a specific perspective.", tags: ["internet", "storytelling", "trend"] },
    { word: "cheers", meaning: "A casual way to say thank you or goodbye.", tags: ["casual", "chat", "polite"] },
    { word: "sussy", meaning: "A playful variation of 'sus', meaning suspicious.", tags: ["gaming", "funny", "internet"] },
    { word: "glow up", meaning: "A big transformation in looks or confidence.", tags: ["style", "selfcare", "beauty"] },
    { word: "boujee", meaning: "Luxurious or high-class, often in a flashy way.", tags: ["fashion", "wealth", "slang"] },
    { word: "canceled", meaning: "When someone is boycotted for bad behavior.", tags: ["internet", "drama", "social"] },
    { word: "receipts", meaning: "Proof or evidence of something said or done.", tags: ["evidence", "internet", "proof"] },
    { word: "big yikes", meaning: "An expression of embarrassment or awkwardness.", tags: ["funny", "reaction", "internet"] },
    { word: "living rent-free", meaning: "When something or someone is constantly on your mind.", tags: ["obsession", "funny", "internet"] },
];


// === ELEMENTS ===
const midSection = document.querySelector(".mid");
const toggleBtn = document.getElementById("toggleBtn");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

let showingAll = false;
let currentList = slangList;

// === RENDER FUNCTION ===
function renderSlangs(list = slangList) {
    midSection.innerHTML = "";

    const displayList = showingAll ? list : list.slice(0, 3);

    if (displayList.length === 0) {
        midSection.innerHTML = `<p style="text-align:center;">No slang found 😢</p>`;
        return;
    }

    displayList.forEach((slang) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3 class="term">${slang.word}</h3>
            <p class="short">${slang.meaning}</p>
            <div class="chips">
                ${slang.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>
        `;

        midSection.appendChild(card);
    });

    toggleBtn.textContent = showingAll ? "Show Less" : "View All";
}

// === TOGGLE BUTTON ===
toggleBtn.addEventListener("click", () => {
    showingAll = !showingAll;
    renderSlangs(currentList);
});

// === SEARCH FUNCTION ===
function searchSlang() {
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        currentList = slangList;
    } else {
        currentList = slangList.filter((item) =>
            item.word.toLowerCase().includes(query) ||
            item.tags.some((tag) => tag.toLowerCase().includes(query))
        );
    }

    showingAll = true;
    renderSlangs(currentList);
}

// === SEARCH EVENTS ===
searchBtn.addEventListener("click", searchSlang);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchSlang();
});

// === INITIAL RENDER ===
renderSlangs();


// === CONTRIBUTOR FORM HANDLING ===
const form = document.getElementById("termForm");
if (form) {
    form.addEventListener("submit", (event) => {
        const nameInput = document.getElementById("Contributer");
        if (nameInput) {
            const name = nameInput.value.trim();

            if (name) {
                // ✅ Send contributor name to Google Sheets
                fetch("https://script.google.com/macros/s/AKfycbw_aKYD1reIyEcI7df-cFXANLfb9rMhQPhseb4PlPlckQV-is_5feyCpgpUte_RHqUM/exec", {
                    method: "POST",
                    body: JSON.stringify({ name }),
                    headers: { "Content-Type": "application/json" },
                }).catch((err) => console.error("Error sending to Google Sheet:", err));
            }
        }
    });
}