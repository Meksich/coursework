package ua.lviv.iot.service;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public abstract class Service<Entity> {
    public abstract JpaRepository<Entity, Integer> getRepository();

    public List<Entity> getAll(){
        return getRepository().findAll();
    }

    public Entity get(Integer id){
        return getRepository().getOne(id);
    }

    public Entity update(Integer id, Entity entity){
        if (getRepository().existsById(id)){
            return getRepository().save(entity);
        }
        return null;
    }
    public Entity create(Entity entity) {
        return getRepository().save(entity);
    }
}
