package com.example.demo.controller;

import com.example.demo.model.ToDo;
import com.example.demo.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*") // allow frontend to access this
public class ToDoController {

    @Autowired
    private ToDoRepository toDoRepository;

    @GetMapping
    public List<ToDo> getAllTodos() {
        return toDoRepository.findAll();
    }

    @PostMapping
    public ToDo createTodo(@RequestBody ToDo todo) {
        return toDoRepository.save(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        toDoRepository.deleteById(id);
    }
}
