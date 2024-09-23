

// Função para armazenar o agendamento
async function armazenarAgendamento(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById("profissional-nome").textContent;
    const data = document.getElementById("data-agendamento").value;
    const horario = document.getElementById("horario-agendamento").value;
    const duracao = document.getElementById("duracao-agendamento").value;

    if (data && horario && duracao) {
        const novoAgendamento = { nome, data, horario, duracao };

        // Enviar o agendamento para o backend
        const response = await fetch('http://localhost:3000/agendamentos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoAgendamento),
        });

        if (response.ok) {
            fecharModal(); // Fecha o modal após armazenar
            exibirAgendamentos(); // Atualiza a lista de agendamentos
        } else {
            alert("Erro ao armazenar o agendamento.");
        }
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para exibir os agendamentos
async function exibirAgendamentos() {
    const response = await fetch('http://localhost:3000/agendamentos');
    const agendamentos = await response.json();
    const agendamentosList = document.getElementById("agendamentos-list");
    agendamentosList.innerHTML = "";

    agendamentos.forEach((agendamento) => {
        const item = document.createElement("li");
        item.textContent = `${agendamento.nome} - ${agendamento.data} - ${agendamento.horario} (${agendamento.duracao} min)`;
        agendamentosList.appendChild(item);
    });
}

// Chamada inicial para carregar agendamentos ao carregar a página
document.addEventListener("DOMContentLoaded", exibirAgendamentos);
