function handleLogin(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os dados do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simular a validação do login (aqui você poderia fazer uma chamada para o servidor)
    console.log('Tentativa de login com sucesso!');
    console.log('Email:', email);
    console.log('Senha:', password);

    // Redireciona para a página de usuário logado
    window.location.href = 'homeLogada.html';
}
