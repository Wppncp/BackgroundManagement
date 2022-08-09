import { computed } from 'vue'
import { mapGetters, mapState, useStore, createNamespacedHelpers,mapActions,mapMutations } from 'vuex'

const useMapper = (mapper, mapFn) => {
  const store = useStore()

  const storeStateFns = mapFn(mapper)
  const storeState = {}
  Object.keys(storeStateFns).forEach((keyFn) => {
    const fn = storeStateFns[keyFn].bind({ $store: store })
    storeState[keyFn] = computed(fn)
  })

  return storeState
}

export const useState = (moduleName, mapper) => {
  let mapperFn = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  } else {
    mapper = moduleName
  }
  return useMapper(mapper, mapperFn)
}

export const useGetters = (moduleName, mapper) => {
  let mapperFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  } else {
    mapper = moduleName
  }
  return useMapper(mapper, mapperFn)
}

export const useActions = (moduleName, mapper) => {
  let mapperFn = mapActions
// 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapActions方法
  if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
      mapperFn = createNamespacedHelpers(moduleName).mapActions
  } else {
    mapper = moduleName
  }
  return useMapper(mapper, mapperFn)
}

export const useMutations = (moduleName, mapper) => {
  let mapperFn = mapMutations;
// 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapActions方法
  if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
      mapperFn = createNamespacedHelpers(moduleName).mapMutations
  } else {
    mapper = moduleName
  }
  return useMapper(mapper, mapperFn)
}