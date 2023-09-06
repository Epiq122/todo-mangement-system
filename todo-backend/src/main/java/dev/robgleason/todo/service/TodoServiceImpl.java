package dev.robgleason.todo.service;


import dev.robgleason.todo.dto.TodoDto;
import dev.robgleason.todo.entity.Todo;
import dev.robgleason.todo.repository.TodoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        // convert TodoDto to Jpa Entity

        Todo todo = new Todo();
        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todoDto.getCompleted());

        // Todo Jpa entity
        Todo savedTodo = todoRepository.save(todo);

        // convert saved jpa entity object into TodoDto
        TodoDto savedDto = new TodoDto();
        savedDto.setId(savedTodo.getId());
        savedDto.setTitle(savedTodo.getTitle());
        savedDto.setDescription(savedTodo.getDescription());
        savedDto.setCompleted(savedTodo.getCompleted());

        return savedDto;
    }
}
