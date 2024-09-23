function handleSubmit(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os dados do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthDate = document.getElementById('birthDate').value;
    const phone = document.getElementById('phone').value;
    const isAdult = document.getElementById('isAdult').checked;

    // Simular a validação do cadastro (aqui você poderia fazer uma chamada para o servidor)
    console.log('Cadastro realizado com sucesso!');
    console.log('E-mail:', email);
    console.log('Senha:', password);
    console.log('Data de Nascimento:', birthDate);
    console.log('Telefone:', phone);
    console.log('Maior de Idade:', isAdult);

    // Redireciona para a página de login após o cadastro
    window.location.href = 'login.html';
}
