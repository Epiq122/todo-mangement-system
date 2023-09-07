package dev.robgleason.todo.controller;


import dev.robgleason.todo.dto.TodoDto;
import dev.robgleason.todo.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;




@CrossOrigin("*")
@RestController
@RequestMapping("api/todos")
@AllArgsConstructor
public class TodoController {


    private TodoService todoService;


    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto) {
        TodoDto savedTodo = todoService.addTodo(todoDto);
        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }


    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long Id) {
        TodoDto todoByIdDto = todoService.getTodo(Id);
        return ResponseEntity.ok(todoByIdDto);
    }


    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos() {
        List<TodoDto> allTodos = todoService.getAllTodos();
        return ResponseEntity.ok(allTodos);
    }


    @PutMapping("{id}")
    public ResponseEntity<TodoDto> updatedTodo(@PathVariable("id") Long todoId, @RequestBody TodoDto todoDto) {
        todoDto.setId(todoId);
        TodoDto updatedTodo = todoService.updateTodo(todoDto);
        return ResponseEntity.ok(updatedTodo);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable("id") Long todoId){
        todoService.deleteTodo(todoId);
        return ResponseEntity.ok("Todo deleted successfully");
    }



    @PatchMapping("{id}/complete")
    public ResponseEntity<TodoDto> completeTodo(@PathVariable("id") Long todoId){
        TodoDto updatedTodo = todoService.completeTodo(todoId);
        return ResponseEntity.ok(updatedTodo);
    }

    @PatchMapping("{id}/incomplete")
    public ResponseEntity<TodoDto> inCompleteTodo(@PathVariable("id") Long todoId){
        TodoDto updatedTodo = todoService.inCompleteTodo(todoId);
        return ResponseEntity.ok(updatedTodo);
    }

}
