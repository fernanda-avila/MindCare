function armazenarAgendamento(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os dados do formulário
    const dataAgendamento = document.getElementById('data-agendamento').value;
    const horarioAgendamento = document.getElementById('horario-agendamento').value;
    const duracaoAgendamento = document.getElementById('duracao-agendamento').value;

    // Simular armazenamento dos dados (aqui você poderia fazer uma chamada para o servidor)
    console.log('Agendamento realizado com sucesso!');
    console.log('Data:', dataAgendamento);
    console.log('Horário:', horarioAgendamento);
    console.log('Duração:', duracaoAgendamento);

    // Redireciona para a página de sucesso
    window.location.href = 'agendadoComSucesso.html';
}
