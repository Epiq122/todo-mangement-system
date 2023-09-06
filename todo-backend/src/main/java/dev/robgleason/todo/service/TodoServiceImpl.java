package dev.robgleason.todo.service;


import dev.robgleason.todo.dto.TodoDto;
import dev.robgleason.todo.entity.Todo;
import dev.robgleason.todo.exception.ResourceNotFoundException;
import dev.robgleason.todo.repository.TodoRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;
    private ModelMapper modelMapper;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {

        Todo todo = modelMapper.map(todoDto, Todo.class);

        Todo savedTodo = todoRepository.save(todo);

        TodoDto savedTodoDto = modelMapper.map(savedTodo, TodoDto.class);


        return savedTodoDto;
    }

    @Override
    public TodoDto getTodo(Long Id) {

        Todo todo = todoRepository.findById(Id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + Id));
        return modelMapper.map(todo, TodoDto.class);
    }
}
