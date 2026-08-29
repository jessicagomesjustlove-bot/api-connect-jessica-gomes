const express = require('express');
const { usuarios, gerarId } = require('./dados');

const router = express.Router();

// Cadastro de usuário
router.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !email) {
        return res.status(400).json({
            error: 'Nome e e-mail são obrigatórios'
        });
    }

    const novoUsuario = {
        id: gerarId(),
        nome,
        email,
        dataCriacao: new Date().toISOString()
    };

    usuarios.push(novoUsuario);

    res.status(201).json({
        data: novoUsuario
    });
});

// Listagem de usuários
router.get('/usuarios', (req, res) => {
    res.status(200).json({
        data: usuarios
    });
});

// Busca específica de usuário por ID
router.get('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    res.status(200).json({
        data: usuario
    });
});

// Atualização de usuário
router.put('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex(u => u.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    const { nome, email } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !email) {
        return res.status(400).json({
            error: 'Nome e e-mail são obrigatórios'
        });
    }

    usuarios[indice] = {
        id: id,
        nome,
        email,
        dataCriacao: usuarios[indice].dataCriacao
    };

    res.status(200).json({
        data: usuarios[indice]
    });
});

// Remoção de usuário
router.delete('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex(u => u.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    usuarios.splice(indice, 1);

    res.status(204).send();
});

module.exports = router;