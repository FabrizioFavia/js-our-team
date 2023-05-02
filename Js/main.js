let cardContainer = document.getElementById("teamContainer");

let arrayMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
]


function insertInfo(){
for (let i = 0; i < arrayMembers.length; i++) {
    const member = arrayMembers[i];

    console.log(member);
    let line = document.createElement("div");
    line.classList.add("memberLine");
    let memberName = document.createElement("div");
    memberName.classList.add("memberInfo");
    memberName.append(member.nome);
    line.append(memberName);

    let memberJob = document.createElement("div");
    memberJob.classList.add("memberInfo");
    memberJob.append(member.ruolo);
    line.append(memberJob);

    let memberPhoto = document.createElement("div");
    memberPhoto.classList.add("memberInfo");
    memberPhoto.append(member.foto);
    line.append(memberPhoto);

    cardContainer.append(line);
};
};

insertInfo();
