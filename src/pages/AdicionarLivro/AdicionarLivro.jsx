import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function AdicionarLivro() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        console.log(data)
        // salvar no banco de dados
    }

    return (
        <div className="adicionar-livro">
            <Container>
                <h1>Adicionar livro</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" className={errors.titulo && "is-invalid"}  {...register("titulo", {required:"O campo é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                            {errors.titulo?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control  className={errors.autor && "is-invalid"}  {...register("autor", {required:"O campo é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                        {errors.autor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control  className={errors.categoria && "is-invalid"}  {...register("categoria", {required:"O campo é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                        {errors.categoria?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control  className={errors.isbn && "is-invalid"}  {...register("isbn", {required:"O campo é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                        {errors.isbn?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagem da capa</Form.Label>
                        <Form.Control type="url" className={errors.capa && "is-invalid"}  {...register("capa", {required:"O campo é obrigatório!"})} />
                        <Form.Text className="text-danger">
                        {errors.capa?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit" variant="success">Adicionar</Button>
                </Form>
            </Container>
        </div>
    )
}