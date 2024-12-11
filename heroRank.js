// Definição de variáveis
let nome = "Artemis"; // Nome do herói
let xp = 7300; // Quantidade de experiência do herói
let nivel = ""; // Variável para armazenar o nível do herói

// Estrutura de decisão com switch
switch (true) {
  case xp < 1000:
    nivel = "Ferro";
    break;
  case xp >= 1001 && xp <= 2000:
    nivel = "Bronze";
    break;
  case xp >= 2001 && xp <= 5000:
    nivel = "Prata";
    break;
  case xp >= 5001 && xp <= 7000:
    nivel = "Ouro";
    break;
  case xp >= 7001 && xp <= 8000:
    nivel = "Platina";
    break;
  case xp >= 8001 && xp <= 9000:
    nivel = "Ascendente";
    break;
  case xp >= 9001 && xp <= 10000:
    nivel = "Imortal";
    break;
  case xp >= 10001:
    nivel = "Radiante";
    break;
  default:
    nivel = "Desconhecido"; // Caso XP seja inválido
}

// Exibição da mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
