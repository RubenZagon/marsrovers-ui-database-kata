import React, { useState } from 'react';
import axios from 'axios';

const RoverForm: React.FC = () => {
    const [command, setCommand] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5122/marsrover/commands', { command });
            console.log(response.data);
            setCommand('');
        } catch (error) {
            console.error('Error al enviar el comando:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Enviar Comando a Mars Rover</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="command" className="form-label">Comando</label>
                    <input type="text" className="form-control" id="command" value={command} onChange={e => setCommand(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default RoverForm;
